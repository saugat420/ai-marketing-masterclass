import { SimpleActionPage } from "../components/SimpleActionPage";
import { sharedActionContent } from "../components/sharedActionContent";

export default function WhatsAppPage() {
  return (
    <SimpleActionPage
      {...sharedActionContent}
      buttonHref="https://us06web.zoom.us/webinar/register/6317868589159/WN__Tx9Q39ATK6Yokfsmh9ZMg"
    />
  );
}
