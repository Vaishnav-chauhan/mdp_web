import React, { useState } from 'react';
import {
  Send,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  User,
  Baby,
  Calendar,
  BookOpen,
  MessageSquare
} from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function ContactForm({ defaultProgram = '', formTitle = 'Admission & General Enquiry' }) {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    interestedClass: defaultProgram || 'playgroup',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent or Guardian Name is required';
    } else if (formData.parentName.trim().length < 2) {
      newErrors.parentName = 'Please enter a valid full name';
    }

    if (!formData.childName.trim()) {
      newErrors.childName = 'Child Name is required';
    }

    if (!formData.childAge.trim()) {
      newErrors.childAge = 'Please specify child age (e.g., 2.5 yrs, 3 yrs)';
    }

    const cleanPhone = formData.phone.replace(/[\s\-+]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact Phone Number is required';
    } else if (!/^\d{10,12}$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.interestedClass) {
      newErrors.interestedClass = 'Please select a program or grade';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  // Construct a prefilled WhatsApp message from form values
  const whatsappText = encodeURIComponent(
    `Hello MDPS Dhampur,\nI would like to enquire about admission:\n- Parent Name: ${formData.parentName}\n- Child Name: ${formData.childName}\n- Child Age: ${formData.childAge}\n- Interested Program: ${formData.interestedClass.toUpperCase()}\n- Phone: ${formData.phone}\n${formData.message ? `- Note: ${formData.message}` : ''}`
  );
  const whatsappDynamicUrl = `https://wa.me/919811825699?text=${whatsappText}`;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-orange-100 shadow-soft-lg">
      <div className="mb-6">
        <h3 className="text-2xl font-black text-navy-900 font-display">
          {formTitle}
        </h3>
        <p className="text-slate-600 text-sm mt-1">
          Fill out the details below. Our admissions coordinator in Dhampur will connect with you.
        </p>
      </div>

      {isSubmitted ? (
        <div className="bg-orange-50/70 border border-orange-200 rounded-2xl p-6 text-center space-y-4 animate-fadeIn">
          <div className="w-14 h-14 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-navy-900 font-display">
              Enquiry Prepared Successfully!
            </h4>
            <p className="text-slate-700 text-sm mt-2 max-w-md mx-auto">
              Thank you, <strong className="text-primary-700">{formData.parentName}</strong>. Your enquiry details for{' '}
              <strong className="text-teal-700">{formData.childName}</strong> have been validated.
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Note: To ensure immediate response, you can forward this enquiry directly to our school's official WhatsApp or call us directly.
            </p>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappDynamicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-teal transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send via WhatsApp Now</span>
            </a>
            <a
              href={`tel:${schoolData.contact.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-orange transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 98118 25699</span>
            </a>
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  parentName: '',
                  childName: '',
                  childAge: '',
                  phone: '',
                  interestedClass: 'playgroup',
                  message: ''
                });
              }}
              className="text-xs text-slate-500 hover:text-navy-900 underline font-medium"
            >
              Submit another enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Parent Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-primary-500" />
                Parent / Guardian Name *
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="e.g. Ramesh Sharma"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.parentName
                    ? 'border-red-300 focus:ring-red-400 bg-red-50/20'
                    : 'border-slate-200 focus:ring-primary-500 focus:border-primary-500 bg-white'
                }`}
              />
              {errors.parentName && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.parentName}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-primary-500" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 98118 25699"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.phone
                    ? 'border-red-300 focus:ring-red-400 bg-red-50/20'
                    : 'border-slate-200 focus:ring-primary-500 focus:border-primary-500 bg-white'
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Child Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5 flex items-center gap-1.5">
                <Baby className="w-3.5 h-3.5 text-teal-600" />
                Child's Name *
              </label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                placeholder="e.g. Aarav Sharma"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.childName
                    ? 'border-red-300 focus:ring-red-400 bg-red-50/20'
                    : 'border-slate-200 focus:ring-primary-500 focus:border-primary-500 bg-white'
                }`}
              />
              {errors.childName && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.childName}
                </p>
              )}
            </div>

            {/* Child Age */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-teal-600" />
                Child's Age *
              </label>
              <input
                type="text"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                placeholder="e.g. 3 Years 2 Months"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.childAge
                    ? 'border-red-300 focus:ring-red-400 bg-red-50/20'
                    : 'border-slate-200 focus:ring-primary-500 focus:border-primary-500 bg-white'
                }`}
              />
              {errors.childAge && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.childAge}
                </p>
              )}
            </div>
          </div>

          {/* Interested Class */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-primary-500" />
              Interested Class / Program *
            </label>
            <select
              name="interestedClass"
              value={formData.interestedClass}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                errors.interestedClass
                  ? 'border-red-300 focus:ring-red-400 bg-red-50/20'
                  : 'border-slate-200 focus:ring-primary-500 focus:border-primary-500 bg-white'
              }`}
            >
              <option value="playgroup">Playgroup (Age: 2 - 3 Years)</option>
              <option value="nursery">Nursery (Age: 3 - 4 Years)</option>
              <option value="lkg">LKG - Lower Kindergarten (Age: 4 - 5 Years)</option>
              <option value="ukg">UKG - Upper Kindergarten (Age: 5 - 6 Years)</option>
              <option value="general">General Campus Visit / Enquiry</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-primary-500" />
              Message / Specific Questions (Optional)
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us any queries regarding timings, transport, curriculum, or visiting the school campus..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none text-sm transition-all bg-white"
            />
          </div>

          {/* Submit Button in Logo Orange */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-navy-900 text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-orange hover:shadow-lg transition-all transform active:scale-[0.99]"
          >
            <Send className="w-4 h-4" />
            <span>Submit Enquiry</span>
          </button>

          <p className="text-[11px] text-slate-500 text-center pt-1">
            We value your privacy. Your details will only be used by MDPS administration to answer your school enquiry.
          </p>
        </form>
      )}
    </div>
  );
}
