import type { Report } from "../types/report";

export const reports: Report[] = [
    {
        id: "report-001",
        shiftId: "shift-001",
        participantId: "participant-001",
        workerId: "user-002",
        summary:
        "Emily confidently participated in community activities and completed grocery shopping with minimal assistance.",
        outcomes: [
        { title: "Improved confidence", achieved: true },
        { title: "Better community engagement", achieved: true },
        { title: "Independent decision making", achieved: false },
        ],
        recommendation:
        "Increase independent community outings while reducing verbal prompts.",
        mood: "positive",
        aiConfidence: 97,
        pdfUrl: null,
        submittedAt: "2026-06-02T12:30:00",
    },
    {
        id: "report-002",
        shiftId: "shift-002",
        participantId: "participant-002",
        workerId: "user-003",
        summary:
        "Daily routines were completed successfully and meal preparation required minimal guidance.",
        outcomes: [
        { title: "Maintained daily routine", achieved: true },
        { title: "Increased independence", achieved: true },
        { title: "Meal planning confidence", achieved: false },
        ],
        recommendation:
        "Continue encouraging independent meal preparation at home.",
        mood: "positive",
        aiConfidence: 95,
        pdfUrl: null,
        submittedAt: "2026-06-03T13:25:00",
    },
    {
        id: "report-003",
        shiftId: "shift-003",
        participantId: "participant-003",
        workerId: "user-004",
        summary:
        "Participant engaged confidently during community interactions and initiated conversations independently.",
        outcomes: [
        { title: "Improved communication", achieved: true },
        { title: "Social engagement", achieved: true },
        { title: "Leadership in group settings", achieved: false },
        ],
        recommendation:
        "Increase opportunities for group participation to build confidence.",
        mood: "positive",
        aiConfidence: 96,
        pdfUrl: null,
        submittedAt: "2026-06-04T14:22:00",
    },
    {
        id: "report-004",
        shiftId: "shift-004",
        participantId: "participant-004",
        workerId: "user-005",
        summary:
        "Successfully travelled using public transport and demonstrated improved mobility throughout the session.",
        outcomes: [
        { title: "Transport confidence", achieved: true },
        { title: "Improved mobility", achieved: true },
        { title: "Independent route planning", achieved: false },
        ],
        recommendation:
        "Introduce longer transport routes with reduced supervision.",
        mood: "positive",
        aiConfidence: 94,
        pdfUrl: null,
        submittedAt: "2026-06-05T11:55:00",
    },
    {
        id: "report-005",
        shiftId: "shift-005",
        participantId: "participant-005",
        workerId: "user-006",
        summary:
        "Medication routine remained consistent and participant followed reminders independently.",
        outcomes: [
        { title: "Medication adherence", achieved: true },
        { title: "Routine consistency", achieved: true },
        { title: "Self-management", achieved: false },
        ],
        recommendation:
        "Gradually reduce reminder frequency over the coming weeks.",
        mood: "positive",
        aiConfidence: 98,
        pdfUrl: null,
        submittedAt: "2026-06-06T12:18:00",
    },
    {
        id: "report-006",
        shiftId: "shift-006",
        participantId: "participant-006",
        workerId: "user-002",
        summary:
        "Household responsibilities were completed with increased independence.",
        outcomes: [
        { title: "Household independence", achieved: true },
        { title: "Task completion", achieved: true },
        { title: "Time management", achieved: false },
        ],
        recommendation:
        "Introduce more complex household responsibilities gradually.",
        mood: "positive",
        aiConfidence: 93,
        pdfUrl: null,
        submittedAt: "2026-06-07T17:22:00",
    },
    {
        id: "report-007",
        shiftId: "shift-007",
        participantId: "participant-007",
        workerId: "user-003",
        summary:
        "Community engagement increased significantly during today's social program.",
        outcomes: [
        { title: "Community engagement", achieved: true },
        { title: "Confidence", achieved: true },
        { title: "Conversation initiation", achieved: false },
        ],
        recommendation:
        "Encourage participation in larger social groups.",
        mood: "positive",
        aiConfidence: 95,
        pdfUrl: null,
        submittedAt: "2026-06-08T13:21:00",
    },
    {
        id: "report-008",
        shiftId: "shift-008",
        participantId: "participant-008",
        workerId: "user-004",
        summary:
        "Participant successfully completed transport training with minimal intervention.",
        outcomes: [
        { title: "Public transport confidence", achieved: true },
        { title: "Independent travel", achieved: true },
        { title: "Route memorisation", achieved: false },
        ],
        recommendation:
        "Expand travel routes during future sessions.",
        mood: "positive",
        aiConfidence: 94,
        pdfUrl: null,
        submittedAt: "2026-06-09T14:20:00",
    },
    {
        id: "report-009",
        shiftId: "shift-009",
        participantId: "participant-009",
        workerId: "user-005",
        summary:
        "Medical appointment attendance was successful with improved emotional wellbeing observed.",
        outcomes: [
        { title: "Appointment attendance", achieved: true },
        { title: "Emotional wellbeing", achieved: true },
        { title: "Self-advocacy", achieved: false },
        ],
        recommendation:
        "Continue encouraging participant-led communication during appointments.",
        mood: "neutral",
        aiConfidence: 91,
        pdfUrl: null,
        submittedAt: "2026-06-10T12:32:00",
    },
    {
        id: "report-010",
        shiftId: "shift-010",
        participantId: "participant-010",
        workerId: "user-006",
        summary:
        "Exercise session completed successfully with noticeable improvement in endurance.",
        outcomes: [
        { title: "Physical endurance", achieved: true },
        { title: "Routine adherence", achieved: true },
        { title: "Independent warm-up", achieved: false },
        ],
        recommendation:
        "Increase exercise intensity progressively.",
        mood: "positive",
        aiConfidence: 96,
        pdfUrl: null,
        submittedAt: "2026-06-11T13:20:00",
    },
    {
        id: "report-011",
        shiftId: "shift-011",
        participantId: "participant-011",
        workerId: "user-002",
        summary:
        "Participant demonstrated greater confidence throughout community activities.",
        outcomes: [
        { title: "Confidence", achieved: true },
        { title: "Reduced prompting", achieved: true },
        { title: "Independent planning", achieved: false },
        ],
        recommendation:
        "Introduce more self-directed community activities.",
        mood: "positive",
        aiConfidence: 97,
        pdfUrl: null,
        submittedAt: "2026-06-12T12:25:00",
    },
    {
        id: "report-012",
        shiftId: "shift-012",
        participantId: "participant-012",
        workerId: "user-003",
        summary:
        "Household tasks were completed efficiently with minimal assistance.",
        outcomes: [
        { title: "Task independence", achieved: true },
        { title: "Routine consistency", achieved: true },
        { title: "Planning skills", achieved: false },
        ],
        recommendation:
        "Continue introducing more independent household planning.",
        mood: "positive",
        aiConfidence: 93,
        pdfUrl: null,
        submittedAt: "2026-06-13T17:20:00",
    },
    {
        id: "report-013",
        shiftId: "shift-013",
        participantId: "participant-013",
        workerId: "user-004",
        summary:
        "Participant independently completed shopping before meal preparation.",
        outcomes: [
        { title: "Meal preparation", achieved: true },
        { title: "Reduced prompting", achieved: true },
        { title: "Budget awareness", achieved: false },
        ],
        recommendation:
        "Introduce independent budgeting activities.",
        mood: "positive",
        aiConfidence: 94,
        pdfUrl: null,
        submittedAt: "2026-06-14T12:48:00",
    },
    {
        id: "report-014",
        shiftId: "shift-014",
        participantId: "participant-014",
        workerId: "user-005",
        summary:
        "Medication management remained consistent with no missed reminders.",
        outcomes: [
        { title: "Medication adherence", achieved: true },
        { title: "Routine consistency", achieved: true },
        { title: "Independent scheduling", achieved: false },
        ],
        recommendation:
        "Gradually reduce medication reminders over time.",
        mood: "positive",
        aiConfidence: 98,
        pdfUrl: null,
        submittedAt: "2026-06-15T14:18:00",
    },
    {
        id: "report-015",
        shiftId: "shift-015",
        participantId: "participant-015",
        workerId: "user-006",
        summary:
        "Participant actively contributed to community discussions and displayed increased confidence.",
        outcomes: [
        { title: "Communication", achieved: true },
        { title: "Community engagement", achieved: true },
        { title: "Leadership skills", achieved: false },
        ],
        recommendation:
        "Encourage participation in volunteer-led community events.",
        mood: "positive",
        aiConfidence: 96,
        pdfUrl: null,
        submittedAt: "2026-06-16T13:24:00",
    },
    {
        id: "report-016",
        shiftId: "shift-016",
        participantId: "participant-016",
        workerId: "user-002",
        summary:
        "Participant attended a scheduled medical appointment and demonstrated increased confidence using public transport.",
        outcomes: [
        { title: "Appointment attendance", achieved: true },
        { title: "Transport confidence", achieved: true },
        { title: "Independent navigation", achieved: false },
        ],
        recommendation:
        "Continue encouraging independent travel to familiar locations.",
        mood: "positive",
        aiConfidence: 96,
        pdfUrl: null,
        submittedAt: "2026-06-17T12:26:00",
    },
    {
        id: "report-017",
        shiftId: "shift-017",
        participantId: "participant-017",
        workerId: "user-003",
        summary:
        "Participant engaged well during community activities and maintained positive interactions throughout the shift.",
        outcomes: [
        { title: "Social engagement", achieved: true },
        { title: "Communication", achieved: true },
        { title: "Confidence", achieved: true },
        ],
        recommendation:
        "Introduce larger community events to further develop social confidence.",
        mood: "positive",
        aiConfidence: 95,
        pdfUrl: null,
        submittedAt: "2026-06-18T13:18:00",
    },
    {
        id: "report-018",
        shiftId: "shift-018",
        participantId: "participant-018",
        workerId: "user-004",
        summary:
        "Daily routine was maintained successfully, although additional prompting was required during meal preparation.",
        outcomes: [
        { title: "Routine consistency", achieved: true },
        { title: "Meal preparation", achieved: false },
        { title: "Task completion", achieved: true },
        ],
        recommendation:
        "Continue practising meal preparation with gradually reduced assistance.",
        mood: "neutral",
        aiConfidence: 91,
        pdfUrl: null,
        submittedAt: "2026-06-19T14:21:00",
    },
    {
        id: "report-019",
        shiftId: "shift-019",
        participantId: "participant-019",
        workerId: "user-005",
        summary:
        "Participant completed household tasks independently and demonstrated improved organisational skills.",
        outcomes: [
        { title: "Household independence", achieved: true },
        { title: "Organisation", achieved: true },
        { title: "Time management", achieved: false },
        ],
        recommendation:
        "Introduce more advanced household planning activities.",
        mood: "positive",
        aiConfidence: 94,
        pdfUrl: null,
        submittedAt: "2026-06-20T12:45:00",
    },
    {
        id: "report-020",
        shiftId: "shift-020",
        participantId: "participant-020",
        workerId: "user-006",
        summary:
        "Participant remained engaged throughout exercise and social activities with noticeable improvements in wellbeing.",
        outcomes: [
        { title: "Physical wellbeing", achieved: true },
        { title: "Community participation", achieved: true },
        { title: "Confidence", achieved: true },
        ],
        recommendation:
        "Maintain current exercise schedule while increasing social opportunities.",
        mood: "positive",
        aiConfidence: 98,
        pdfUrl: null,
        submittedAt: "2026-06-21T17:18:00",
    },
    {
        id: "report-021",
        shiftId: "shift-021",
        participantId: "participant-021",
        workerId: "user-002",
        summary:
        "Participant independently completed shopping tasks using public transport with minimal prompting.",
        outcomes: [
        { title: "Shopping independence", achieved: true },
        { title: "Public transport", achieved: true },
        { title: "Budget awareness", achieved: false },
        ],
        recommendation:
        "Incorporate independent budgeting into future community sessions.",
        mood: "positive",
        aiConfidence: 95,
        pdfUrl: null,
        submittedAt: "2026-06-22T12:30:00",
    },
    {
        id: "report-022",
        shiftId: "shift-022",
        participantId: "participant-022",
        workerId: "user-003",
        summary:
        "Medication routine remained stable with no missed prompts or concerns identified.",
        outcomes: [
        { title: "Medication adherence", achieved: true },
        { title: "Routine consistency", achieved: true },
        { title: "Self-management", achieved: false },
        ],
        recommendation:
        "Continue monitoring while gradually encouraging self-management.",
        mood: "positive",
        aiConfidence: 97,
        pdfUrl: null,
        submittedAt: "2026-06-23T13:12:00",
    },
    {
        id: "report-023",
        shiftId: "shift-023",
        participantId: "participant-023",
        workerId: "user-004",
        summary:
        "Participant interacted confidently with community members and displayed improved communication skills.",
        outcomes: [
        { title: "Communication", achieved: true },
        { title: "Community engagement", achieved:true },
        { title: "Leadership", achieved: false },
        ],
        recommendation:
        "Encourage participation in community volunteer programs.",
        mood: "positive",
        aiConfidence: 94,
        pdfUrl: null,
        submittedAt: "2026-06-24T14:16:00",
    },
    {
        id: "report-024",
        shiftId: "shift-024",
        participantId: "participant-024",
        workerId: "user-005",
        summary:
        "Participant completed meal preparation successfully but required occasional reminders during clean-up.",
        outcomes: [
        { title: "Meal preparation", achieved: true },
        { title: "Cleaning routine", achieved: false },
        { title: "Household independence", achieved: true },
        ],
        recommendation:
        "Continue reinforcing post-meal routines.",
        mood: "neutral",
        aiConfidence: 90,
        pdfUrl: null,
        submittedAt: "2026-06-25T11:48:00",
    },
    {
        id: "report-025",
        shiftId: "shift-025",
        participantId: "participant-025",
        workerId: "user-006",
        summary:
        "Participant demonstrated improved endurance throughout the exercise session.",
        outcomes: [
        { title: "Physical endurance", achieved: true },
        { title: "Participation", achieved: true },
        { title: "Self-motivation", achieved: false },
        ],
        recommendation:
        "Increase exercise duration gradually.",
        mood: "positive",
        aiConfidence: 93,
        pdfUrl: null,
        submittedAt: "2026-06-26T13:17:00",
    },
    {
        id: "report-026",
        shiftId: "shift-026",
        participantId: "participant-026",
        workerId: "user-002",
        summary:
        "Participant independently completed shopping and community participation tasks with minimal support.",
        outcomes: [
        { title: "Community participation", achieved: true },
        { title: "Shopping independence", achieved: true },
        { title: "Planning skills", achieved: false },
        ],
        recommendation:
        "Encourage participant-led planning before future outings.",
        mood: "positive",
        aiConfidence: 96,
        pdfUrl: null,
        submittedAt: "2026-06-27T12:26:00",
    },
    {
        id: "report-027",
        shiftId: "shift-027",
        participantId: "participant-027",
        workerId: "user-003",
        summary:
        "Participant travelled independently and attended the scheduled appointment successfully.",
        outcomes: [
        { title: "Transport confidence", achieved: true },
        { title: "Appointment attendance", achieved: true },
        { title: "Independent planning", achieved: false },
        ],
        recommendation:
        "Expand travel training to unfamiliar locations.",
        mood: "positive",
        aiConfidence: 95,
        pdfUrl: null,
        submittedAt: "2026-06-28T17:20:00",
    },
    {
        id: "report-028",
        shiftId: "shift-028",
        participantId: "participant-028",
        workerId: "user-004",
        summary:
        "Participant actively engaged during group exercise and social discussions.",
        outcomes: [
        { title: "Social confidence", achieved: true },
        { title: "Physical wellbeing", achieved: true },
        { title: "Leadership", achieved: false },
        ],
        recommendation:
        "Continue encouraging participation in group-based activities.",
        mood: "positive",
        aiConfidence: 94,
        pdfUrl: null,
        submittedAt: "2026-06-29T13:16:00",
    },
    {
        id: "report-029",
        shiftId: "shift-029",
        participantId: "participant-029",
        workerId: "user-005",
        summary:
        "Morning household routine was completed independently with excellent consistency.",
        outcomes: [
        { title: "Routine consistency", achieved: true },
        { title: "Household independence", achieved: true },
        { title: "Initiative", achieved: false },
        ],
        recommendation:
        "Introduce self-directed morning planning tasks.",
        mood: "positive",
        aiConfidence: 95,
        pdfUrl: null,
        submittedAt: "2026-06-30T12:42:00",
    },
    {
        id: "report-030",
        shiftId: "shift-030",
        participantId: "participant-030",
        workerId: "user-006",
        summary:
        "Participant demonstrated greater confidence while engaging with community members throughout the session.",
        outcomes: [
        { title: "Confidence", achieved: true },
        { title: "Communication", achieved: true },
        { title: "Independent leadership", achieved: false },
        ],
        recommendation:
        "Provide opportunities to mentor peers during community activities.",
        mood: "positive",
        aiConfidence: 97,
        pdfUrl: null,
        submittedAt: "2026-07-01T14:20:00",
    },
    {
        id: "report-031",
        shiftId: "shift-031",
        participantId: "participant-001",
        workerId: "user-002",
        summary:
        "Participant displayed increased confidence during community engagement and actively interacted with others.",
        outcomes: [
        { title: "Community participation", achieved: true },
        { title: "Confidence", achieved: true },
        { title: "Independent leadership", achieved: false },
        ],
        recommendation:
        "Increase opportunities for self-directed community participation.",
        mood: "positive",
        aiConfidence: 96,
        pdfUrl: null,
        submittedAt: "2026-07-02T12:20:00",
    },
    {
        id: "report-032",
        shiftId: "shift-032",
        participantId: "participant-002",
        workerId: "user-003",
        summary:
        "Participant maintained daily routines independently while completing household tasks efficiently.",
        outcomes: [
        { title: "Routine consistency", achieved: true },
        { title: "Household independence", achieved: true },
        { title: "Time management", achieved: false },
        ],
        recommendation:
        "Introduce more complex household planning responsibilities.",
        mood: "positive",
        aiConfidence: 94,
        pdfUrl: null,
        submittedAt: "2026-07-03T13:18:00",
    },
    {
        id: "report-033",
        shiftId: "shift-033",
        participantId: "participant-003",
        workerId: "user-004",
        summary:
        "Participant completed transport training successfully and demonstrated improved confidence while travelling.",
        outcomes: [
        { title: "Transport confidence", achieved: true },
        { title: "Independent travel", achieved: true },
        { title: "Route planning", achieved: false },
        ],
        recommendation:
        "Gradually introduce unfamiliar travel routes.",
        mood: "positive",
        aiConfidence: 95,
        pdfUrl: null,
        submittedAt: "2026-07-04T14:18:00",
    },
    {
        id: "report-034",
        shiftId: "shift-034",
        participantId: "participant-004",
        workerId: "user-005",
        summary:
        "Meal preparation and household responsibilities were completed independently throughout the shift.",
        outcomes: [
        { title: "Meal preparation", achieved: true },
        { title: "Household independence", achieved: true },
        { title: "Planning skills", achieved: false },
        ],
        recommendation:
        "Increase participant involvement in weekly meal planning.",
        mood: "positive",
        aiConfidence: 96,
        pdfUrl: null,
        submittedAt: "2026-07-05T17:22:00",
    },
    {
        id: "report-035",
        shiftId: "shift-035",
        participantId: "participant-005",
        workerId: "user-006",
        summary:
        "Participant remained engaged throughout exercise activities and displayed improved emotional wellbeing.",
        outcomes: [
        { title: "Physical wellbeing", achieved: true },
        { title: "Social participation", achieved: true },
        { title: "Confidence", achieved: true },
        ],
        recommendation:
        "Maintain current physical activity program while increasing group participation.",
        mood: "positive",
        aiConfidence: 98,
        pdfUrl: null,
        submittedAt: "2026-07-06T12:40:00",
    },
    {
        id: "report-036",
        shiftId: "shift-036",
        participantId: "participant-006",
        workerId: "user-002",
        summary:
        "Medical appointment attendance was successful, though participant required reassurance before the consultation.",
        outcomes: [
        { title: "Appointment attendance", achieved: true },
        { title: "Emotional confidence", achieved: false },
        { title: "Transport independence", achieved: true },
        ],
        recommendation:
        "Focus on building confidence before healthcare appointments.",
        mood: "neutral",
        aiConfidence: 90,
        pdfUrl: null,
        submittedAt: "2026-07-07T13:16:00",
    },
    {
        id: "report-037",
        shiftId: "shift-037",
        participantId: "participant-007",
        workerId: "user-003",
        summary:
        "Participant completed shopping tasks with significantly fewer prompts than previous sessions.",
        outcomes: [
        { title: "Shopping independence", achieved: true },
        { title: "Reduced prompting", achieved: true },
        { title: "Budget awareness", achieved: false },
        ],
        recommendation:
        "Introduce simple budgeting during shopping activities.",
        mood: "positive",
        aiConfidence: 97,
        pdfUrl: null,
        submittedAt: "2026-07-08T12:22:00",
    },
    {
        id: "report-038",
        shiftId: "shift-038",
        participantId: "participant-008",
        workerId: "user-004",
        summary:
        "Medication adherence remained excellent with consistent completion of routine tasks.",
        outcomes: [
        { title: "Medication adherence", achieved: true },
        { title: "Routine consistency", achieved: true },
        { title: "Self-management", achieved: false },
        ],
        recommendation:
        "Continue reducing reminder frequency over time.",
        mood: "positive",
        aiConfidence: 99,
        pdfUrl: null,
        submittedAt: "2026-07-09T14:20:00",
    },
    {
        id: "report-039",
        shiftId: "shift-039",
        participantId: "participant-009",
        workerId: "user-005",
        summary:
        "Participant showed measurable improvement in endurance and remained motivated throughout physical activities.",
        outcomes: [
        { title: "Mobility", achieved: true },
        { title: "Confidence", achieved: true },
        { title: "Independent exercise", achieved: false },
        ],
        recommendation:
        "Introduce additional independent exercise routines.",
        mood: "positive",
        aiConfidence: 96,
        pdfUrl: null,
        submittedAt: "2026-07-10T13:19:00",
    },
    {
        id: "report-040",
        shiftId: "shift-040",
        participantId: "participant-010",
        workerId: "user-006",
        summary:
        "Participant completed household cleaning successfully but required reminders to finish meal preparation.",
        outcomes: [
        { title: "Household cleaning", achieved: true },
        { title: "Meal preparation", achieved: false },
        { title: "Routine independence", achieved: true },
        ],
        recommendation:
        "Continue practising meal preparation with reduced staff intervention.",
        mood: "neutral",
        aiConfidence: 89,
        pdfUrl: null,
        submittedAt: "2026-07-11T12:18:00",
    },
    {
        id: "report-041",
        shiftId: "shift-046",
        participantId: "participant-016",
        workerId: "user-002",
        summary:
        "Participant actively engaged in outdoor activities and demonstrated improved physical endurance.",
        outcomes: [
        { title: "Community engagement", achieved: true },
        { title: "Improved mobility", achieved: true },
        { title: "Independent exercise", achieved: false },
        ],
        recommendation:
        "Continue outdoor community activities while reducing physical assistance.",
        mood: "positive",
        aiConfidence: 96,
        pdfUrl: null,
        submittedAt: "2026-07-15T12:20:00",
    },
    {
        id: "report-042",
        shiftId: "shift-047",
        participantId: "participant-017",
        workerId: "user-003",
        summary:
        "Participant completed shopping and meal preparation independently with improved confidence.",
        outcomes: [
        { title: "Shopping independence", achieved: true },
        { title: "Meal preparation", achieved: true },
        { title: "Budget planning", achieved: false },
        ],
        recommendation:
        "Introduce independent budgeting during future shopping sessions.",
        mood: "positive",
        aiConfidence: 95,
        pdfUrl: null,
        submittedAt: "2026-07-16T13:18:00",
    },
    {
        id: "report-043",
        shiftId: "shift-048",
        participantId: "participant-018",
        workerId: "user-004",
        summary:
        "Medication adherence remained excellent while daily routines were completed with minimal prompting.",
        outcomes: [
        { title: "Medication adherence", achieved: true },
        { title: "Routine consistency", achieved: true },
        { title: "Self-management", achieved: false },
        ],
        recommendation:
        "Gradually reduce reminder frequency to encourage independence.",
        mood: "positive",
        aiConfidence: 98,
        pdfUrl: null,
        submittedAt: "2026-07-17T14:16:00",
    },
    {
        id: "report-044",
        shiftId: "shift-049",
        participantId: "participant-019",
        workerId: "user-005",
        summary:
        "Participant confidently used public transport and engaged positively throughout the community visit.",
        outcomes: [
        { title: "Transport confidence", achieved: true },
        { title: "Community participation", achieved: true },
        { title: "Independent navigation", achieved: false },
        ],
        recommendation:
        "Increase independent travel to familiar community locations.",
        mood: "positive",
        aiConfidence: 94,
        pdfUrl: null,
        submittedAt: "2026-07-18T12:44:00",
    },
    {
        id: "report-045",
        shiftId: "shift-050",
        participantId: "participant-020",
        workerId: "user-006",
        summary:
        "Participant actively contributed during social activities and demonstrated improved communication skills.",
        outcomes: [
        { title: "Communication", achieved: true },
        { title: "Community engagement", achieved: true },
        { title: "Peer leadership", achieved: false },
        ],
        recommendation:
        "Provide opportunities for peer mentoring within group sessions.",
        mood: "positive",
        aiConfidence: 97,
        pdfUrl: null,
        submittedAt: "2026-07-19T17:18:00",
    },
    {
        id: "report-046",
        shiftId: "shift-055",
        participantId: "participant-025",
        workerId: "user-006",
        summary:
        "Participant engaged with the community but required more prompting than in previous sessions.",
        outcomes: [
        { title: "Community participation", achieved: true },
        { title: "Confidence", achieved: false },
        { title: "Communication", achieved: true },
        ],
        recommendation:
        "Review support strategies to rebuild confidence during community outings.",
        mood: "neutral",
        aiConfidence: 89,
        pdfUrl: null,
        submittedAt: "2026-07-24T13:20:00",
    },
    {
        id: "report-047",
        shiftId: "shift-056",
        participantId: "participant-026",
        workerId: "user-002",
        summary:
        "Daily routine was completed successfully with excellent medication adherence.",
        outcomes: [
        { title: "Routine consistency", achieved: true },
        { title: "Medication adherence", achieved: true },
        { title: "Independent planning", achieved: false },
        ],
        recommendation:
        "Introduce participant-led scheduling for routine activities.",
        mood: "positive",
        aiConfidence: 96,
        pdfUrl: null,
        submittedAt: "2026-07-25T12:15:00",
    },
    {
        id: "report-048",
        shiftId: "shift-057",
        participantId: "participant-027",
        workerId: "user-003",
        summary:
        "Participant completed shopping independently and demonstrated improved decision-making skills.",
        outcomes: [
        { title: "Shopping independence", achieved: true },
        { title: "Decision making", achieved: true },
        { title: "Financial planning", achieved: false },
        ],
        recommendation:
        "Expand shopping activities to include budgeting exercises.",
        mood: "positive",
        aiConfidence: 95,
        pdfUrl: null,
        submittedAt: "2026-07-26T17:20:00",
    },
    {
        id: "report-049",
        shiftId: "shift-058",
        participantId: "participant-028",
        workerId: "user-004",
        summary:
        "Participant independently completed household tasks and maintained a structured daily routine.",
        outcomes: [
        { title: "Household independence", achieved: true },
        { title: "Routine consistency", achieved: true },
        { title: "Time management", achieved: false },
        ],
        recommendation:
        "Increase responsibility for planning household activities.",
        mood: "positive",
        aiConfidence: 94,
        pdfUrl: null,
        submittedAt: "2026-07-27T13:16:00",
    },
    {
        id: "report-050",
        shiftId: "shift-059",
        participantId: "participant-029",
        workerId: "user-005",
        summary:
        "Participant demonstrated excellent participation during community wellness activities.",
        outcomes: [
        { title: "Physical wellbeing", achieved: true },
        { title: "Community engagement", achieved: true },
        { title: "Independent motivation", achieved: false },
        ],
        recommendation:
        "Continue increasing opportunities for independent participation.",
        mood: "positive",
        aiConfidence: 97,
        pdfUrl: null,
        submittedAt: "2026-07-28T12:40:00",
    },
    {
        id: "report-051",
        shiftId: "shift-036",
        participantId: "participant-006",
        workerId: "user-002",
        summary:
        "Participant displayed signs of anxiety before the appointment despite completing the scheduled activities.",
        outcomes: [
        { title: "Appointment attendance", achieved: true },
        { title: "Emotional regulation", achieved: false },
        { title: "Confidence", achieved: false },
        ],
        recommendation:
        "Review emotional support strategies before healthcare appointments.",
        mood: "concerning",
        aiConfidence: 92,
        pdfUrl: null,
        submittedAt: "2026-07-29T09:10:00",
    },
    {
        id: "report-052",
        shiftId: "shift-040",
        participantId: "participant-010",
        workerId: "user-006",
        summary:
        "Participant required repeated prompting to complete meal preparation, suggesting a decline in routine independence.",
        outcomes: [
        { title: "Household cleaning", achieved: true },
        { title: "Meal preparation", achieved: false },
        { title: "Routine independence", achieved: false },
        ],
        recommendation:
        "Increase monitoring and reassess participant support goals.",
        mood: "concerning",
        aiConfidence: 90,
        pdfUrl: null,
        submittedAt: "2026-07-29T10:25:00",
    },
    {
        id: "report-053",
        shiftId: "shift-055",
        participantId: "participant-025",
        workerId: "user-006",
        summary:
        "Community participation was completed, however engagement was noticeably lower than previous sessions.",
        outcomes: [
        { title: "Community participation", achieved: true },
        { title: "Engagement", achieved: false },
        { title: "Confidence", achieved: false },
        ],
        recommendation:
        "Monitor engagement closely over the next two weeks.",
        mood: "concerning",
        aiConfidence: 91,
        pdfUrl: null,
        submittedAt: "2026-07-30T08:50:00",
    },
    {
        id: "report-054",
        shiftId: "shift-057",
        participantId: "participant-027",
        workerId: "user-003",
        summary:
        "Participant showed improved independence overall but still hesitated when making financial decisions.",
        outcomes: [
        { title: "Shopping independence", achieved: true },
        { title: "Decision making", achieved: true },
        { title: "Financial confidence", achieved: false },
        ],
        recommendation:
        "Introduce structured budgeting exercises during shopping activities.",
        mood: "neutral",
        aiConfidence: 93,
        pdfUrl: null,
        submittedAt: "2026-07-30T12:30:00",
    },
    {
        id: "report-055",
        shiftId: "shift-059",
        participantId: "participant-029",
        workerId: "user-005",
        summary:
        "Participant remained physically active but appeared fatigued during the latter part of the session.",
        outcomes: [
        { title: "Physical participation", achieved: true },
        { title: "Stamina", achieved: false },
        { title: "Community engagement", achieved: true },
        ],
        recommendation:
        "Monitor fatigue levels and review activity intensity if symptoms persist.",
        mood: "neutral",
        aiConfidence: 90,
        pdfUrl: null,
        submittedAt: "2026-07-30T15:15:00",
    },


]; 