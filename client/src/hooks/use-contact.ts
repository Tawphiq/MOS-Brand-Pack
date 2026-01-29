import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type InsertContactMessage } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema } from "@shared/schema";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const validated = api.contact.submit.input.parse(data);
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Failed to submit message');
      }

      return api.contact.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We will get back to you shortly.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });
}

export function useContact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    // Format message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Email:* ${data.email}\n` +
      `*Subject:* ${data.subject}\n\n` +
      `*Message:*\n${data.message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp phone number: +233 24 473 4616
    // Format: remove spaces and + sign for wa.me URL
    const phoneNumber = "233244734616";
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Show success message and reset form
    toast({
      title: "Opening WhatsApp",
      description: "Your message is being prepared. Please send it through WhatsApp.",
      variant: "default",
    });
    
    form.reset();
  };

  return {
    form,
    onSubmit,
    isPending: false, // No API call, so no pending state
  };
}
