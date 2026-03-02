'use client';

import { createContext, useContext } from 'react';

interface AdminCollegeCtx {
  collegeId: string;
}

const AdminCollegeContext = createContext<AdminCollegeCtx>({
  collegeId: process.env.NEXT_PUBLIC_COLLEGE_ID ?? 'education',
});

export function AdminCollegeProvider({
  collegeId,
  children,
}: {
  collegeId: string;
  children: React.ReactNode;
}) {
  return (
    <AdminCollegeContext.Provider value={{ collegeId }}>
      {children}
    </AdminCollegeContext.Provider>
  );
}

export function useAdminCollege(): string {
  return useContext(AdminCollegeContext).collegeId;
}
