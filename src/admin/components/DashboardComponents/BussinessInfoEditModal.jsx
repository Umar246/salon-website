// src/components/EditModal.jsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import PropTypes from "prop-types";

export default function BussinessInfoEdit({
  isOpen,
  onClose,
  title,
  formData,
  onChange,
  onSave,
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose} className="font-mulish">
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 font-mulish">
          {Object.entries(formData).map(([key, value]) => (
            <Input
              key={key}
              name={key}
              value={value}
              onChange={onChange}
              placeholder={key}
              className="w-full"
            />
          ))}
        </div>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button className={"bg-secondary hover:bg-amber-600"} onClick={onSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

BussinessInfoEdit.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Whether the dialog is open or not
  onClose: PropTypes.func.isRequired, // Function to call when dialog closes
  title: PropTypes.string.isRequired, // Title string to display in modal header
  formData: PropTypes.object.isRequired, // Object containing form field values
  onChange: PropTypes.func.isRequired, // Function to handle input changes (e.g. event => ...)
  onSave: PropTypes.func.isRequired, // Function to call when Save button is clicked
};
