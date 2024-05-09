import { Children, useState } from "react";
import {
  useFloating,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  useId,
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal
} from "@floating-ui/react";


function Dialog({children}) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen
  });

  const click = useClick(context);
  const role = useRole(context);
  const dismiss = useDismiss(context, { outsidePressEvent: "" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    role,
    dismiss
  ]);

  const headingId = useId();
  const descriptionId = useId();

  return (
    <>
      <button ref={refs.setReference} {...getReferenceProps()}>
       button
      </button>
      <FloatingPortal>
        {isOpen && (
          <FloatingOverlay className="bg-black/50 flex justify-center items-center" lockScroll>
            <FloatingFocusManager context={context}>
              {children}
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </FloatingPortal>
    </>
  );
}

Dialog.Trigger = ({children}) => <>{children}</>

export default Dialog