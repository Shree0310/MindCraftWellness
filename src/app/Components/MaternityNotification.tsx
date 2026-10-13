"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const MaternityNotification = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has previously closed the notification
    const hasClosedNotification = localStorage.getItem("maternity-notification-closed");

    if (!hasClosedNotification) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("maternity-notification-closed", "true");
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop overlay with blur */}
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Notification popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-[var(--white)] border border-[var(--cream-dark)] rounded-lg shadow-2xl max-w-2xl w-full pointer-events-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Close notification"
          >
            <X size={24} />
          </button>

          {/* Content */}
          <div className="p-8 md:p-12">
            <h2
              className="text-2xl md:text-3xl mb-6 text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              A Note About Availability
            </h2>

            <div
              className="space-y-4 text-[var(--text-secondary)] leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <p>
                I am currently on maternity leave, and sessions are temporarily paused.
                Updates regarding the resumption of sessions will be shared on this page
                approximately around <strong className="text-[var(--text-primary)]">July 2027</strong>.
              </p>

              <p>
                The photographs currently displayed on our website feature our previous clinic space.
                Upon my return from maternity leave, I will be welcoming clients at a new office location.
                Updated photographs and location details will be shared closer to my return.
              </p>

              <p className="text-[var(--text-primary)] font-medium">
                Thank you for your understanding. I look forward to welcoming you into our new space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaternityNotification;
