import React, { useState } from "react";
import {
  Mail,
  Send,
  Github,
  Check,
  AlertCircle,
  FileCode2,
} from "lucide-react";
import "./Contact.css";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "sending" | "success" | "error";
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({ type: "idle" });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus({ type: "sending" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;

      setStatus({
        type: "success",
        message: "감사합니다 ! 이메일이 성공적으로 발송되었습니다.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      if (error instanceof Error) {
        setStatus({
          type: "error",
          message:
            "죄송합니다. 이메일을 보내는 과정에서 오류가 발생하였습니다. 다시 시도해주세요.",
        });
      }
    }

    setTimeout(() => setStatus({ type: "idle" }), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "deokbin@naver.com",
      href: "mailto:deokbin@naver.com",
      description: "Send me an email",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Db0111",
      className: "github",
    },
    {
      icon: FileCode2,
      label: "Tistory",
      href: "https://dev-tomato.tistory.com/",
      className: "tistory",
    },
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contact</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info-section">
            <div className="contact-info-card">
              <h3 className="contact-info-title">📬 문의하기</h3>

              <div className="contact-info-list">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="contact-info-item"
                    >
                      <div className="contact-info-icon">
                        <IconComponent />
                      </div>
                      <div className="contact-info-content">
                        <p className="contact-info-description">
                          {item.description}
                        </p>
                        <p className="contact-info-value">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="social-card">
              <h3 className="social-title">Connect With Me</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-link ${social.className}`}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="contact-form-card">
              <h3 className="form-title">이메일 보내기</h3>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">이름 *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`form-input ${errors.name ? "error" : ""}`}
                      placeholder="이름을 적어주세요"
                    />
                    {errors.name && (
                      <p className="form-error">
                        <AlertCircle />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label">이메일 주소 *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${errors.email ? "error" : ""}`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="form-error">
                        <AlertCircle />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">제목 *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`form-input ${errors.subject ? "error" : ""}`}
                    placeholder="어떤 주제인가요?"
                  />
                  {errors.subject && (
                    <p className="form-error">
                      <AlertCircle />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">메시지 *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`form-textarea ${errors.message ? "error" : ""}`}
                    placeholder="메시지 내용을 입력해주세요"
                  />
                  {errors.message && (
                    <p className="form-error">
                      <AlertCircle />
                      {errors.message}
                    </p>
                  )}
                </div>

                {status.type !== "idle" && (
                  <div className={`status-message ${status.type}`}>
                    {status.type === "success" && <Check />}
                    {status.type === "error" && <AlertCircle />}
                    {status.type === "sending" && <div className="spinner" />}
                    <p>{status.message || "Sending your message..."}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.type === "sending"}
                  className="submit-button"
                >
                  {status.type === "sending" ? (
                    <>
                      <div className="spinner" />
                      <span>보내는 중...</span>
                    </>
                  ) : (
                    <>
                      <Send />
                      <span>이메일 보내기</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
