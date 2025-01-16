export interface IConfirmDialog {
  open: boolean;
  onConfirmCancel: () => void;
  onConfirm: () => void;
  title: string;
}
