interface IPCRContext {
  page: () => {
    title: React.ReactNode | null;
    description: React.ReactNode | null;
    cancelAndBackButton?: string;
  };
  SetFormID: (formId: string) => void;
  SetIsPending: (isPending: boolean) => void;
  SetButtonText: (text: string) => void;
  SetActiveTab: (text: number) => void;
  ActiveTab: number;
  SetMobileValue: (value: number) => void;
  SetMobileText: (text: string) => void;
  SetMobileH4: (h4: string) => void;
}
