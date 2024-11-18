import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5
});

async function verifyRecaptcha(token: string) {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    return data.success;
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message, recaptchaToken } = body;

        const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
        if (!isRecaptchaValid) {
            return NextResponse.json(
                { error: 'reCAPTCHA doğrulaması başarısız' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: process.env.SMTP_TO,
            subject: `Portfolio Contact Form: ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}