"use client";

import { useState } from "react";
import { PopupButton, PopupModal } from "react-calendly";
import { cn } from "@/lib/utils";

const CALENDLY_URL = "https://calendly.com/didriksson/new-meeting";

interface CalendlyButtonProps {
  text?: string;
  className?: string;
  utmSource?: string;
}

export function CalendlyButton({
  text = "Book konsultasjon",
  className,
  utmSource = "website",
}: CalendlyButtonProps) {
  const [rootElement] = useState<HTMLElement | null>(() =>
    typeof document !== "undefined" ? document.body : null
  );

  if (!rootElement) {
    return (
      <button className={className} disabled>
        {text}
      </button>
    );
  }

  return (
    <PopupButton
      url={CALENDLY_URL}
      rootElement={rootElement}
      text={text}
      className={cn(className)}
      prefill={{
        customAnswers: {
          a1: "Nettside bestilling",
        },
      }}
      utm={{
        utmSource: "didriksson.no",
        utmMedium: utmSource,
        utmCampaign: "website",
      }}
    />
  );
}

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  const [rootElement] = useState<HTMLElement | null>(() =>
    typeof document !== "undefined" ? document.body : null
  );

  if (!rootElement) return null;

  return (
    <PopupModal
      url={CALENDLY_URL}
      onModalClose={onClose}
      open={isOpen}
      rootElement={rootElement}
      prefill={{
        customAnswers: {
          a1: "Nettside bestilling",
        },
      }}
      utm={{
        utmSource: "didriksson.no",
        utmMedium: "modal",
        utmCampaign: "website",
      }}
    />
  );
}
