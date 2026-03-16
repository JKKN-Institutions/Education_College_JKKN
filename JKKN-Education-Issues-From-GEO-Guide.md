# JKKN College of Education — Issues Extracted from GEO Handoff Guide

> **Source:** GEO-Handoff-Guide (1).md (dated 2026-03-09/10)
> **Extracted:** 2026-03-16
> **Purpose:** All issues, action items, and mentions specific to JKKN College of Education

---

## 1. Overall Health Status

| Metric | Value |
|--------|-------|
| SEO Score | **2/10** |
| Visibility | **NOT RANKING** |
| Urgency | **CRITICAL** |

**Context:** Education college is one of the worst-performing institutions digitally, tied with Dental, Pharmacy, and Arts & Science at 2/10.

---

## 2. Institution Data Card

| Field | Value | Notes |
|-------|-------|-------|
| URL | `jkkn.ac.in/jkkn-college-of-education` | **DISCREPANCY:** Live site is actually `edu.jkkn.ac.in` — GEO guide has old/incorrect URL |
| Accreditation | NCTE Approved, TNTEU Affiliated | — |
| Programs | B.Ed (100 seats) | — |
| Placement | 98% placement rate | **[WEBSITE CLAIM — UNVERIFIED]** Must verify against aggregator data before deploying in any content |
| SEO Status | CRITICAL (2/10) | No meta tags, no H1 |

---

## 3. Critical SEO Issues (Phase 0)

### 3.1 Missing Meta Description
Education is one of the **5 sites with NO meta description**. Ready-to-use template from the guide:

```html
<title>JKKN College of Education - Top B.Ed College in Tamil Nadu</title>
<meta name="description" content="JKKN College of Education - NCTE approved B.Ed college in Tamil Nadu. Two-year B.Ed program with excellent teaching infrastructure. Top education college in Namakkal.">
```

**Action:** Deploy this meta description to `edu.jkkn.ac.in` homepage `<head>` section.

### 3.2 Missing or Wrong H1 Tag
Guide flags that several sites have missing/incorrect H1 tags. Education college needs to be audited:
- Does the H1 tag exist on `edu.jkkn.ac.in`?
- Does it clearly say "JKKN College of Education"?

**Action:** Audit and fix H1 tag on Education college homepage.

### 3.3 No Schema.org / Structured Data
Education college has **zero Schema.org markup**. AI engines and Google cannot read college data in structured format.

**Action:** Generate and deploy EducationalOrganization + FAQPage + BreadcrumbList JSON-LD.

---

## 4. AI Visibility Issues (Move 1)

### 4.1 robots.txt Status
Education college URL (`edu.jkkn.ac.in`) is a subdomain — needs **separate verification** that robots.txt allows all AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.).

**Note:** Main domain `jkkn.ac.in` already has AI-friendly robots.txt (verified 2026-03-09), but subdomains need individual checking.

**Action:** Check `https://edu.jkkn.ac.in/robots.txt` — if not AI-friendly, copy the `jkkn.ac.in` version.

### 4.2 llms.txt Entry
The planned `llms.txt` for `jkkn.ac.in` includes a minimal Education college entry:

```markdown
### JKKN College of Education
- Programs: B.Ed
- Approval: NCTE
```

**Action:** Ensure Education college is included when llms.txt is deployed. Consider adding more details (seats, affiliation, placement).

---

## 5. Review Campaign (Move 2)

Education college is not specifically mentioned in the review tracking table, but the campaign applies to **ALL institutions**.

**Action Items:**
- Check current review count for JKKN College of Education on:
  - Shiksha.com
  - Collegedunia.com
  - Careers360.com
  - Google Business Profile
- Launch review campaign targeting B.Ed students and alumni
- Target: 25+ reviews on Shiksha in Month 1

---

## 6. Structured Data / Schema.org (Move 3)

Education college needs complete Schema.org JSON-LD markup including:
- `EducationalOrganization` + `CollegeOrUniversity`
- `Course` schema for B.Ed program
- `FAQPage` schema with 10+ questions
- `BreadcrumbList` schema

**Key data for Schema.org generation:**

| Field | Value |
|-------|-------|
| Name | JKKN College of Education |
| URL | https://edu.jkkn.ac.in |
| Type | EducationalOrganization, CollegeOrUniversity |
| Approval | NCTE Approved |
| Affiliation | Tamil Nadu Teachers Education University (TNTEU) |
| Program | B.Ed (2 years, 100 seats) |
| Address | NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183 |
| Parent Org | JKKN Institutions (https://jkkn.ac.in) |

**Action:** Use Claude Code to generate complete Schema.org JSON-LD for Education college.

---

## 7. GEO Content Hub Pages (Move 4)

Education college is in **Tier 3** (Week 3-4 priority) for GEO content hub pages.

### Pages to Create:
1. **JKKN College of Education Overview** — Target query: "best B.Ed college Tamil Nadu" / "best education college Namakkal"
2. **B.Ed Admission Guide** — Target query: "B.Ed admission Tamil Nadu 2026"
3. **JKKN Education vs Competitors Comparison** — Target queries for competitor comparisons

### Content Requirements per GEO Template:
- Opening paragraph with key facts in first 200 words
- Key facts table
- H2 headers phrased as student questions
- FAQ section with 10+ questions
- Schema.org markup in `<head>`
- "Last Updated" date
- Author attribution (verified Principal name needed)
- Mobile-responsive, fast-loading

---

## 8. Google Business Profile (Move 5)

| Action | Status |
|--------|--------|
| Create/Claim GBP for JKKN College of Education | **NOT DONE** |

**GBP Checklist:**
- [ ] Business name (exactly as on signboard)
- [ ] Category: "College" / "Education College"
- [ ] Address: exact match with all other JKKN listings
- [ ] Phone number
- [ ] Website URL: https://edu.jkkn.ac.in
- [ ] Business hours
- [ ] 20+ photos (campus, classrooms, labs, library, events)
- [ ] Services/programs: B.Ed
- [ ] Description (use GEO page opening paragraph)

---

## 9. Education Portal Profiles (Move 5)

Complete JKKN College of Education profile on all education portals:

| Portal | Action |
|--------|--------|
| Shiksha | Create/complete full profile |
| Collegedunia | Create/complete full profile |
| Careers360 | Create/complete full profile |
| CollegeDekho | Create/complete full profile |
| GetMyUni | Create/complete full profile |

**For each portal:**
- [ ] All basic info filled (correct NAP)
- [ ] B.Ed program listed with details
- [ ] Fee structure updated for 2026-27
- [ ] Placement data added (verified figure only)
- [ ] Campus photos uploaded
- [ ] Faculty highlights added

---

## 10. Weekly Calendar — Education College Tasks

| Week | Task | Time |
|------|------|------|
| Week 0 (Day 2) | Send meta description to IT for Education college | Included in batch |
| Week 0 (Day 2) | Send H1 tag fix request | Included in batch |
| Week 1 (Mon) | Check robots.txt on edu.jkkn.ac.in | Included in subdomain check |
| Week 1 (Thu) | Generate Schema.org JSON-LD for Education | Part of batch generation |
| Week 4 (Mon-Tue) | Generate GEO page for Education college | 4 hours (with Arts & Science, Schools) |
| Month 2+ | 1 new content piece per week (FAQ expansion, case study, comparison, data update) | 2-3 hours/week |

---

## 11. Technical SEO Issues Affecting Education

These are site-wide issues that also affect Education college:

| Issue | Impact on Education |
|-------|-------------------|
| JavaScript bloat (106 files, target: <20) | Slow page load, AI crawlers timeout |
| Zero paragraph `<p>` tags | Content structure broken for Google and AI |
| 24% images missing alt text | Visual content invisible |
| No freshness signals (dates) | Appears stale to Google and AI |
| No FAQ schema | Missing rich snippets |
| Content in PDFs instead of HTML | AI crawlers can't read PDFs reliably |

---

## 12. Data Verification Required

Before publishing ANY Education college content in GEO pages, Schema.org, or FAQ answers:

| Data Point | Current Value | Action |
|------------|--------------|--------|
| Placement rate | 98% (website claim) | **MUST verify against Shiksha, Careers360, Collegedunia** — do NOT publish website figure without aggregator cross-reference |
| Fee structure | Not in guide | Get actual B.Ed fee from admin office |
| Faculty count | Not in guide | Get from Education college |
| Student intake per year | 100 seats (from data card) | Verify current year |
| Principal name | Not in guide | Get current Principal name for author attribution |
| Phone number | Not in guide | Get canonical phone for Education college |
| Email | Not in guide | Get admissions email for Education college |

---

## 13. URL Discrepancy (IMPORTANT)

| Source | URL Listed |
|--------|-----------|
| GEO Handoff Guide (Data Card) | `jkkn.ac.in/jkkn-college-of-education` |
| CLAUDE.md (Institutions table) | `https://edu.jkkn.ac.in/` |
| Live site (actual) | `https://edu.jkkn.ac.in/` |

**Issue:** The GEO guide lists an incorrect/old URL (`jkkn.ac.in/jkkn-college-of-education`). The actual live site is `edu.jkkn.ac.in`.

**Action:** Update the GEO Handoff Guide Data Card with the correct URL. All Schema.org, llms.txt, and GEO content must use `https://edu.jkkn.ac.in/`.

---

## 14. AEO (Answer Engine Optimization) for Education

Education college needs AEO optimization alongside GEO:

### Target Queries for Featured Snippets:
| Query | Snippet Format |
|-------|---------------|
| "JKKN College of Education fees" | Table |
| "B.Ed admission Tamil Nadu 2026" | Numbered list |
| "Best B.Ed college in Namakkal" | Paragraph |
| "JKKN Education placement rate" | Paragraph |
| "B.Ed eligibility criteria Tamil Nadu" | Bullet list |
| "JKKN Education vs [competitor]" | Table |

### AEO Content Elements Needed:
- Featured Snippet Box (40-60 words) in first 200 words of every page
- Quick Facts Table for B.Ed program
- FAQ Section with Schema.org FAQPage markup
- Admission process as numbered steps (list snippet target)
- Voice search optimized conversational Q&A headers

---

## 15. Competitor Context

The GEO guide doesn't list specific competitors for Education college. Need to identify:
- Top B.Ed colleges in Tamil Nadu
- Top B.Ed colleges in Namakkal/Erode/Salem region
- Competitors appearing in AI search for "best B.Ed college Tamil Nadu"

**Action:** Run competitor analysis for Education college segment.

---

## Summary: Priority Action Items for Education College

| Priority | Action | Timeline |
|----------|--------|----------|
| **P0 — TODAY** | Fix meta description (deploy template) | Day 1-3 |
| **P0 — TODAY** | Audit and fix H1 tag | Day 1-3 |
| **P1 — Week 1** | Check/fix robots.txt on edu.jkkn.ac.in | Week 1 |
| **P1 — Week 1** | Fix URL discrepancy in GEO guide | Week 1 |
| **P2 — Week 1-2** | Generate Schema.org JSON-LD | Week 1-2 |
| **P2 — Week 1-2** | Verify placement data against aggregators | Week 1-2 |
| **P3 — Week 2** | Create/claim Google Business Profile | Week 2 |
| **P3 — Week 2** | Complete education portal profiles | Week 2-3 |
| **P4 — Week 3-4** | Create GEO content hub page | Week 3-4 |
| **P4 — Week 3-4** | Launch review campaign for B.Ed students/alumni | Week 3-4 |
| **P5 — Month 2+** | Case studies, comparison pages, FAQ expansion | Ongoing |
| **P5 — Month 2+** | AEO snippet optimization | Ongoing |
