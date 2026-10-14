"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  email: string;
  emailHref: string;
};

export default function ContactForm({ email, emailHref }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") ?? "");
    const lastName = String(formData.get("lastName") ?? "");
    const email = String(formData.get("email") ?? "");
    const topic = String(formData.get("subject") ?? "General question");
    const message = String(formData.get("message") ?? "");
    const subject = `NSBE URegina website: ${topic}`;
    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`;

    setSubmitted(true);
    window.location.href = `${emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 dark:border-green-400/20 dark:bg-green-400/10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#006B3C] text-xl text-white">✓</span>
        <h2 className="mt-6 text-2xl font-black text-gray-950 dark:text-white">Your email draft is ready.</h2>
        <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">Your email app should open with the chapter address and your message filled in. If it does not, email <a className="font-bold text-[#006B3C] dark:text-green-300" href={emailHref}>{email}</a> directly.</p>
        <button type="button" onClick={() => setSubmitted(false)} className="mt-6 font-bold text-[#006B3C] dark:text-green-300">Compose another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-[#122019]">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold text-gray-700 dark:text-gray-200">First name<input required name="firstName" autoComplete="given-name" className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-normal text-gray-900 outline-none focus:border-[#006B3C] focus:ring-2 focus:ring-[#006B3C]/15 dark:border-white/10 dark:bg-white/5 dark:text-white" /></label>
        <label className="text-sm font-bold text-gray-700 dark:text-gray-200">Last name<input required name="lastName" autoComplete="family-name" className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-normal text-gray-900 outline-none focus:border-[#006B3C] focus:ring-2 focus:ring-[#006B3C]/15 dark:border-white/10 dark:bg-white/5 dark:text-white" /></label>
      </div>
      <label className="block text-sm font-bold text-gray-700 dark:text-gray-200">Email address<input required type="email" name="email" autoComplete="email" className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-normal text-gray-900 outline-none focus:border-[#006B3C] focus:ring-2 focus:ring-[#006B3C]/15 dark:border-white/10 dark:bg-white/5 dark:text-white" /></label>
      <label className="block text-sm font-bold text-gray-700 dark:text-gray-200">I am contacting you about<select required name="subject" className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-normal text-gray-900 outline-none focus:border-[#006B3C] focus:ring-2 focus:ring-[#006B3C]/15 dark:border-white/10 dark:bg-[#17251e] dark:text-white"><option value="">Choose a topic</option><option>Membership</option><option>Events</option><option>Sponsorship</option><option>Partnership or collaboration</option><option>General question</option></select></label>
      <label className="block text-sm font-bold text-gray-700 dark:text-gray-200">Message<textarea required name="message" rows={6} className="mt-2 w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-normal text-gray-900 outline-none focus:border-[#006B3C] focus:ring-2 focus:ring-[#006B3C]/15 dark:border-white/10 dark:bg-white/5 dark:text-white" /></label>
      <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-300">Submitting opens an addressed draft in your email app. Your message is not stored by this website.</p>
      <button type="submit" className="w-full rounded-full bg-[#006B3C] px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#005530] hover:shadow-lg sm:w-auto">Open email draft</button>
    </form>
  );
}
