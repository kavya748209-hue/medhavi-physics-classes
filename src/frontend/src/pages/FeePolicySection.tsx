import { SectionWrapper } from "@/components/SectionWrapper";
import {
  AlertTriangle,
  Banknote,
  CalendarClock,
  CreditCard,
  FileText,
  Landmark,
  Percent,
  Receipt,
  RotateCcw,
  ShieldAlert,
  Wallet,
} from "lucide-react";
import { motion } from "motion/react";
import type { ComponentType } from "react";

interface PolicyRule {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

interface PolicyGroup {
  id: string;
  heading: string;
  accent: "gold" | "cyan";
  icon: ComponentType<{ className?: string }>;
  rules: PolicyRule[];
}

const policyGroups: PolicyGroup[] = [
  {
    id: "fee-policy-one-time",
    heading: "One-Time Payment",
    accent: "gold",
    icon: Wallet,
    rules: [
      {
        id: "fee-policy.one_time.rebate",
        icon: Percent,
        title: "5% Rebate on Full Payment",
        desc: "Pay the entire course fee in a single installment and receive a 5% rebate, capped at a maximum of Rs 8,000.",
      },
      {
        id: "fee-policy.one_time.non_refundable",
        icon: ShieldAlert,
        title: "Non-Refundable",
        desc: "The one-time payment, including the rebate availed, is non-refundable under any circumstances once admission is confirmed.",
      },
    ],
  },
  {
    id: "fee-policy-installment",
    heading: "Installment Payment",
    accent: "cyan",
    icon: CalendarClock,
    rules: [
      {
        id: "fee-policy.installment.split",
        icon: CreditCard,
        title: "50% · 30% · 20% Split",
        desc: "Pay 50% of the total fee at the time of admission, 30% as the second installment, and the remaining 20% as the third installment.",
      },
      {
        id: "fee-policy.installment.cheques",
        icon: Banknote,
        title: "Post-Dated Cheques Within 120 Days",
        desc: "Submit post-dated cheques for all installments within 120 days from the date of admission.",
      },
      {
        id: "fee-policy.installment.late_fee",
        icon: AlertTriangle,
        title: "Late Fee Rs 50/Day",
        desc: "A late fee of Rs 50 per day applies for delayed installment payments, charged for up to 30 days.",
      },
      {
        id: "fee-policy.installment.cancellation",
        icon: ShieldAlert,
        title: "Admission Cancelled After 30 Days",
        desc: "If the pending installment remains unpaid beyond 30 days, the admission stands cancelled automatically.",
      },
    ],
  },
  {
    id: "fee-policy-refund",
    heading: "Refund Rules",
    accent: "gold",
    icon: RotateCcw,
    rules: [
      {
        id: "fee-policy.refund.window",
        icon: CalendarClock,
        title: "Apply Within 15 Days",
        desc: "Refund applications must be submitted within 15 days of the installment payment date to be considered valid.",
      },
      {
        id: "fee-policy.refund.deduction",
        icon: Percent,
        title: "25% Deductible (incl. GST 18%)",
        desc: "A 25% deduction (inclusive of 18% GST) is applicable on the refundable amount as processing and administrative charges.",
      },
      {
        id: "fee-policy.refund.transfer",
        icon: Landmark,
        title: "NEFT / RTGS to Parent or Student Account",
        desc: "Approved refunds are transferred via NEFT or RTGS directly to the bank account of the parent or student.",
      },
      {
        id: "fee-policy.refund.short_term",
        icon: ShieldAlert,
        title: "Short-Term Courses (< 4 Months) Non-Refundable",
        desc: "Courses with a duration of less than 4 months are entirely non-refundable, regardless of the reason for withdrawal.",
      },
      {
        id: "fee-policy.refund.documents",
        icon: FileText,
        title: "Original Fee Receipt & Identity Card Required",
        desc: "A refund application is accepted only when accompanied by the original fee receipt and the issued identity card.",
      },
      {
        id: "fee-policy.refund.no_verbal",
        icon: AlertTriangle,
        title: "No Verbal / Phone / Email / WhatsApp Requests",
        desc: "Refund requests made verbally, over the phone, by email, or through WhatsApp will not be entertained under any circumstances.",
      },
    ],
  },
];

const accentStyles: Record<
  PolicyGroup["accent"],
  {
    ring: string;
    iconBg: string;
    iconColor: string;
    border: string;
    glow: string;
  }
> = {
  gold: {
    ring: "from-primary/20 via-transparent to-primary/5",
    iconBg: "bg-primary/10 group-hover:bg-primary/20",
    iconColor: "text-primary",
    border: "oklch(0.72 0.16 80 / 0.18)",
    glow: "hover:glow-gold",
  },
  cyan: {
    ring: "from-accent/20 via-transparent to-accent/5",
    iconBg: "bg-accent/10 group-hover:bg-accent/20",
    iconColor: "text-accent",
    border: "oklch(0.68 0.2 220 / 0.18)",
    glow: "hover:glow-cyan",
  },
};

function PolicyCard({
  rule,
  accent,
  index,
}: { rule: PolicyRule; accent: PolicyGroup["accent"]; index: number }) {
  const Icon = rule.icon;
  const styles = accentStyles[accent];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      data-ocid={rule.id}
      className={`glass-card rounded-2xl p-6 transition-smooth group ${styles.glow}`}
      style={{ border: `1px solid ${styles.border}` }}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-smooth ${styles.iconBg}`}
        >
          <Icon className={`w-5 h-5 ${styles.iconColor}`} />
        </div>
        <div className="min-w-0">
          <h4 className="font-display font-bold text-foreground text-base mb-1.5 leading-snug">
            {rule.title}
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {rule.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function FeePolicySection() {
  return (
    <SectionWrapper
      id="fee-policy"
      className="py-20 px-4"
      style={{ background: "oklch(0.11 0.012 270)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Transparent & Fair
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display font-black text-3xl md:text-5xl text-foreground mb-4 leading-tight"
          >
            Fee{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-300 to-accent bg-clip-text text-transparent">
              Policy
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-base"
          >
            Clear rules for payment options and refunds — so you always know
            exactly what to expect when you enroll at Medhavi Physics Classes.
          </motion.p>
        </div>

        {/* Policy groups */}
        <div className="space-y-12">
          {policyGroups.map((group, gi) => {
            const GroupIcon = group.icon;
            const styles = accentStyles[group.accent];
            return (
              <div key={group.id} data-ocid={`${group.id}.section`}>
                {/* Group header */}
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.05 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${styles.iconBg}`}
                    style={{ border: `1px solid ${styles.border}` }}
                  >
                    <GroupIcon className={`w-6 h-6 ${styles.iconColor}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-foreground text-xl md:text-2xl leading-tight">
                      {group.heading}
                    </h3>
                    <div
                      className="mt-1.5 h-0.5 w-20 rounded-full"
                      style={{
                        background:
                          group.accent === "gold"
                            ? "linear-gradient(90deg, oklch(0.72 0.16 80 / 0.7), transparent)"
                            : "linear-gradient(90deg, oklch(0.68 0.2 220 / 0.7), transparent)",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Rule cards */}
                <div
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                  data-ocid={`${group.id}.list`}
                >
                  {group.rules.map((rule, ri) => (
                    <PolicyCard
                      key={rule.id}
                      rule={rule}
                      accent={group.accent}
                      index={ri}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex items-start gap-3 max-w-3xl mx-auto glass-card rounded-2xl p-5"
          style={{ border: "1px solid oklch(0.72 0.16 80 / 0.18)" }}
          data-ocid="fee-policy.note"
        >
          <Receipt className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            <span className="text-foreground font-semibold">Note:</span> All
            fee-related decisions are made at the discretion of Medhavi Physics
            Classes management. For any clarification regarding payments or
            refunds, please contact the office in person during working hours.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default FeePolicySection;
