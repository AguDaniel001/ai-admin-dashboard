
import Text from "./font/Text";

export default function Badge({ children, isSuccess , ...props }) {
 
  return (
    <Text tag="span" size="sm" weight="medium" 
     className={` align-top rounded-full px-2 py-1 ${
      isSuccess
        ? "bg-[var(--background-success)] text-[var(--success)]! "
        : "bg-[var(--background-error)] text-[var(--error)]! "} `} 
     {...props}>
      {children}
    </Text>
  );
}
