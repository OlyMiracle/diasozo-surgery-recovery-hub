import Head from 'next/head';
import Link from 'next/link';

export default function BookingInterest() {
  return (
    <>
      <Head>
        <title>Booking Interest | Diasozo Surgery Recovery & Comfort Hub</title>
        <meta name="description" content="Express your interest in comfort, prayer, and recovery support sessions. Please note these are not medical consultations." />
      </Head>
      <main>
        <h1>Booking Interest</h1>
        <p>If you would like to schedule a comfort, prayer and recovery support session with us, please complete our booking interest form. Our sessions provide emotional and faith-based support before and after surgery.</p>
        <p><strong>Important:</strong> These sessions are not medical consultations. For medical advice or emergency care, please contact your doctor or hospital.</p>
        <p>We will review your request and reach out with available times.</p>
        <p>
          Looking for women’s health services in Nigeria?{' '}
          <a href="https://christian-miracle-hospital.vercel.app">Visit Christian Miracle Hospital</a>.
        </p>
      </main>
    </>
  );
}
