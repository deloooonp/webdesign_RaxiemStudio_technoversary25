"use client";

import { Layout } from "../components";
import { ProfilePicture, ProfileInfo, ProfileActivity } from "./sections";

export default function Profile() {
  return (
    <Layout title="Profile Akun">
      <div className="grid md:grid-cols-9 gap-6">
        <div className=" flex flex-col md:col-span-5 gap-6">
          <ProfilePicture />
          <ProfileInfo />
        </div>

        <div className="flex flex-col md:col-span-4 gap-6">
          <ProfileActivity />
        </div>
      </div>
    </Layout>
  );
}
