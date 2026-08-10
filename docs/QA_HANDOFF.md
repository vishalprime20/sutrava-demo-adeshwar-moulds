# Website QA handoff packet — Adeshwar Moulds

## QA handoff — Adeshwar Moulds Pvt. Ltd.

### Links
- **repository_url:** https://github.com/vishalprime20/sutrava-demo-adeshwar-moulds
- **demo_url:** https://vishalprime20.github.io/sutrava-demo-adeshwar-moulds/
- **Lead ID:** SUT-LEAD-20260810-0002
- **Qualification Status:** QUALIFIED
- **Demo Required:** TRUE
- **Paperclip issue:** SUT-22 → Website QA child

### Build
- **build_status:** PASS (local `npm test` + `SUTRAVA_STRICT=1 npm test`)
- **build_command:** npm test / SUTRAVA_STRICT=1 npm test
- **pages_workflow:** `.github/workflows/pages.yml` (GitHub Actions → github-pages)
- **commit_sha:** `af6ab0810e28c3a41f02d67deac2fcf10008ef45` (tip; footer credit unlinked in `75e69c9`)
- **pages_deploy:** Deploy GitHub Pages **success** for tip (`af6ab08`)
- **QA defect fix:** Footer credit is plain text (no `https://sutravasoftwaresolutions.com` href). Live HTML verified — defect #1 cleared; ready for QA re-gate.

### Verified facts used on the page
| Field | Value | Source |
|-------|-------|--------|
| Business name | Adeshwar Moulds Pvt. Ltd. | SUT-13 research-batch |
| Category | Plastic injection mould manufacturer | research |
| City / region | Vatva, Ahmedabad, Gujarat | research |
| Services shown | Pipe fitting, bath fitting, kitchen ware, pharma/electronic/textile/automobile plastic part moulds; in-house mould testing | research |
| Phone | +91 98250 63393 | verified |
| Email | info@adeshwarmoulds.com | verified |
| Address | Plot No. 1801, Near Rudraksh Complex, GIDC Phase III, Near Jashodanagar Cross Road, Vatva, Ahmedabad, Gujarat 382445 | research |
| GSTIN | 24AAGCA8612F1ZY | research |
| CIN | U29220GJ2007PTC052369 | research |
| Leadership | Mr. Jaysukh Mistry (public association) | research |
| Founding narrative | 1988 (public materials) | research |
| Facebook | https://www.facebook.com/adeshwarmouldspvtltd/ | research |
| Existing website | https://adeshwarmoulds.com/ (outdated — demo is modernization concept) | research |

### Explicitly omitted (UNKNOWN / unverified)
- Google Business URL / rating / review count
- Other social links beyond Facebook
- Capacity, awards, client counts, fabricated testimonials

### Customization notes (why this is not a clone)
- Tokens / color: tool-steel graphite + signal amber (not MJ Polymers cyan film; not starter SAMPLE)
- Typography: Barlow Condensed + Source Sans 3
- Layout: cavity-grid services + industry application strip (not film service stack)
- Hero / visual: mould cavity plate grid + steel panel frame
- CTA wording: Call works / Email enquiry with verified contacts

### Builder self-test notes
- [x] No fake reviews/awards/stats
- [x] No lorem / SAMPLE leftover in HTML
- [x] Local self-test PASS (strict)
- [x] Pages publish prepared (Actions workflow + og:url/canonical)
- [ ] Mobile ~375px layout OK (QA)
- [ ] Desktop layout OK (QA)
- [ ] Live Pages assets 200 (QA)

### Requested QA outcome
Please return **QA APPROVED** or **QA FAILED** with checklist evidence on the QA child issue.
