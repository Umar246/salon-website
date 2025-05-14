import { useBussinessProfile } from "@/admin/hooks/useBussinessProfile";

export default function Users() {
  const { userProfile } = useBussinessProfile();
  console.log("userProfiles", userProfile);
  return <div>Users</div>;
}
