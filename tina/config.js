import { defineConfig } from "tinacms";

// הגדרות TinaCMS לאתר עורכי דין
export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  
  schema: {
    collections: [
      {
        name: "page",
        label: "דפי האתר",
        path: "content/pages",
        fields: [
          {
            type: "string",
            name: "title",
            label: "כותרת הדף",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "תוכן הדף",
            isBody: true,
          },
        ],
      },
      {
        name: "settings",
        label: "הגדרות האתר",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "site_name",
            label: "שם המשרד",
          },
          {
            type: "string",
            name: "lawyer_name", 
            label: "שם עורך הדין",
          },
          {
            type: "string",
            name: "phone",
            label: "טלפון",
          },
          {
            type: "string",
            name: "email",
            label: "אימייל",
          },
          {
            type: "string",
            name: "address",
            label: "כתובת",
          },
          {
            type: "number",
            name: "experience_years",
            label: "שנות ניסיון",
          },
        ],
      },
      {
        name: "testimonial",
        label: "המלצות",
        path: "content/testimonials",
        fields: [
          {
            type: "string",
            name: "client_name",
            label: "שם הלקוח",
            required: true,
          },
          {
            type: "string",
            name: "practice_area",
            label: "תחום",
          },
          {
            type: "rich-text", 
            name: "content",
            label: "תוכן ההמלצה",
            required: true,
          },
          {
            type: "number",
            name: "rating",
            label: "דירוג",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "תאריך",
          },
        ],
      },
    ],
  },
});
