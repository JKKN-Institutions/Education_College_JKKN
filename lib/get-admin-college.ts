import { cookies } from 'next/headers';

/**
 * Returns the college_id to use for admin operations.
 * Super-admins can override this by selecting a college; the choice is stored
 * in the `admin_college_id` cookie. Regular admins always get their own
 * college from the env variable.
 */
export async function getAdminCollegeId(): Promise<string> {
  const cookieStore = await cookies();
  const override = cookieStore.get('admin_college_id')?.value;
  return override || process.env.NEXT_PUBLIC_COLLEGE_ID!;
}
