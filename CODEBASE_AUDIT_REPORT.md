# JKKN Education College Codebase — Data Consistency Audit Report

**Date:** March 17, 2026  
**Codebase:** JKKN College of Education (Next.js 15.1.5)

---

## Executive Summary

Conducted a comprehensive audit of placement rates, site configuration, founding dates, contact information (NAP), and parent organization references. Key findings: Multiple date-related inconsistencies detected; contact info and configuration mostly consistent; parent organization properly referenced in schema.

---

## 1. PLACEMENT RATE INCONSISTENCIES

**Status:** NO INCONSISTENCIES DETECTED (No placement percentages in code)

Neither "95%" nor "98%" appear in source code. Placement data is not stored in this codebase — it belongs in the Supabase database or centralized placements portal (placements.jkkn.ac.in).

---

## 2. SITE CONFIGURATION (site-config.ts)

File: `/lib/site-config.ts` (lines 1-72)

**Configuration includes:**
- College ID: 'education'
- College name: 'JKKN College of Education'
- Phone: +919345855001
- Email: education@jkkn.ac.in
- Address: 'JKKN College of Education, NH-544 (Salem to Coimbatore Highway), Kumarapalayam, Namakkal (DT), Tamil Nadu. 638183.'
- Domain: 'education.jkkn.ac.in'
- Primary color: #006837

**NO placement data in site-config.**

All values are environment-variable driven with sensible defaults.

---

## 3. FOUNDING DATE INCONSISTENCIES

**CRITICAL INCONSISTENCY FOUND**

| Date | Context | File | Line |
|------|---------|------|------|
| **1952** | Meta description claim | app/about/trust/page.tsx | 9 |
| **1969** | Actual Trust registration | app/about/trust/page.tsx | 62 |
| **1965** | Girls school founded | app/about/trust/page.tsx | 58 |

**Issue:** The meta description (line 9) states:
"Learn about the trust behind JKKN College of Education — JKKN Educational Institutions, **established 1952**"

But the page body (line 62) correctly states:
"The Trust, J.K.K. Rangammal Charitable Trust, was **established in 1969** (Reg No: 33)"

**Root cause:** 1952 is the PARENT ORGANIZATION founding date (JKKN Institutions as a whole per CLAUDE.md), not the Education college or its Trust. The meta description incorrectly conflates these.

**Recommendation:** Update meta description to say "established 1969" for accuracy on this specific page.

---

## 4. CONTACT INFORMATION & NAP CONSISTENCY

**Phone Number: +919345855001**

Locations checked (ALL CONSISTENT):
- lib/site-config.ts line 47 ✓
- app/page.tsx line 33 (schema) ✓
- app/page.tsx line 129 (hero button) ✓
- components/Footer.tsx line 98 ✓

**Email: education@jkkn.ac.in**

Locations checked (ALL CONSISTENT):
- lib/site-config.ts line 48 ✓
- app/page.tsx line 34 (schema) ✓
- components/Footer.tsx line 104 ✓

**Address Consistency: MINOR FORMATTING VARIATIONS**

All use postal code 638183, but formatting varies:
- site-config.ts: "NH-544 (Salem to Coimbatore Highway), Kumarapalayam, Namakkal (DT), Tamil Nadu. 638183."
- app/page.tsx (schema): Broken into structured fields (streetAddress, addressLocality, etc.)
- app/contact/page.tsx: "Natarajapuram, NH-544 (Salem To Coimbatore National Highway), Kumarapalayam (TK), Namakkal (DT). Tamil Nadu. 638183."
- privacy-policy: Same as contact page

**Issue:** Contact and privacy pages have HARDCODED addresses instead of using siteConfig.address. This violates DRY principle.

**Issue:** "Salem to Coimbatore" vs "Salem To Coimbatore National Highway" — capitalization differs.

**Issue:** Some pages include "Natarajapuram" (area name), others don't.

---

## 5. PARENT ORGANIZATION REFERENCE

**Status:** CORRECTLY IMPLEMENTED

File: app/page.tsx lines 48-52

```javascript
parentOrganization: {
  '@type': 'Organization',
  name: 'JKKN Educational Institutions',
  url: 'https://jkkn.ac.in',
}
```

This appears in the EducationalOrganization schema on the homepage. Correctly links to parent portal (https://jkkn.ac.in). Not repeated on department pages (Course schema), which is correct.

---

## 6. CRITICAL ISSUES SUMMARY

| Issue | Severity | Location | Type | Action |
|-------|----------|----------|------|--------|
| Meta says "1952" but Trust is "1969" | HIGH | app/about/trust/page.tsx:9 | Date conflict | CRITICAL FIX |
| Hardcoded addresses instead of siteConfig | MEDIUM | app/contact/page.tsx, app/others/privacy-policy/page.tsx | Single source of truth | FIX SOON |
| Address capitalization inconsistent | MEDIUM | Multiple files | Consistency | FIX SOON |
| Address format varies (with/without Natarajapuram) | MEDIUM | Multiple files | Clarity needed | CLARIFY |
| Homepage schema missing foundingDate | LOW | app/page.tsx | Schema completeness | OPTIONAL |

---

## 7. RECOMMENDATIONS

**CRITICAL (Fix immediately):**
1. Update app/about/trust/page.tsx line 9 meta description to say "established 1969" instead of "1952"

**HIGH (Fix in next cycle):**
2. Replace hardcoded addresses in app/contact/page.tsx and app/others/privacy-policy/page.tsx with siteConfig.address import
3. Standardize address format — decide: should "Natarajapuram" be in all addresses or none?
4. Standardize capitalization: "Salem to Coimbatore Highway" (consistent casing)

**OPTIONAL:**
5. Add foundingDate: '1952' to homepage EducationalOrganization schema for completeness
6. Document why three dates exist (1965 school, 1969 Trust, 1952 parent org)

---

## Conclusion

Overall status: MOSTLY CONSISTENT with minor issues.

✓ Placement rates: Not in code (correct location in DB)
✓ Site config: Properly centralized, env-var driven
✗ Founding dates: 1952 vs 1969 inconsistency in meta description
✓ Phone/email: Consistent everywhere
⚠ Address: Consistent core data but hardcoded in some places, formatting varies
✓ Parent organization: Correctly implemented in schema

All issues are fixable with minor code changes. No structural problems.

