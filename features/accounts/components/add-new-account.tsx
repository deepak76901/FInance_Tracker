import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { useNewAccount } from "@/features/accounts/hooks/use-new-accounts";

export const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccount();
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>Add New Account</SheetTitle>
          <SheetDescription>
            Create a new Account to track your Transactions.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
