export enum NotificationType {
  TEXT = "text",
  ACTIONS = "actions",
  PROGRESS = "progress",
}

export const useNotifications = () =>
  useState<
    Array<{
      uuid: string;
      type: NotificationType;
      title: string;
      description: string;
      actions?: Array<{
        name: string;
        style: "accent" | "default";
        link?: string;
        action?: () => void
      }>;
      progress?: number;
    }>
  >("notifications", () => []);
