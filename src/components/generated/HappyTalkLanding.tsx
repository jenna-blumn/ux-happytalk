import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

// --- Data ---

interface PricingItem {
  id: string;
  label: string;
  sublabel: string;
  price: string;
  unit: string;
  spec: string;
  recommendation: string;
  accentColor: string;
  bgColor: string;
}
interface BenefitItem {
  id: string;
  text: string;
}
const PRICING_ITEMS: PricingItem[] = [{
  id: 'alimtalk',
  label: '알림톡',
  sublabel: 'KakaoTalk',
  price: '8',
  unit: '원/건',
  spec: '텍스트 최대 1,000자 + 링크 버튼',
  recommendation: '주문·배송 알림에 최적',
  accentColor: 'text-brand-primary',
  bgColor: 'bg-amber-50'
}, {
  id: 'sms',
  label: 'SMS',
  sublabel: '단문 문자',
  price: '12',
  unit: '원/건',
  spec: '90byte 단문 메시지',
  recommendation: '짧은 프로모션·인증 메시지',
  accentColor: 'text-brand-primary',
  bgColor: 'bg-sky-50'
}, {
  id: 'lms',
  label: 'LMS',
  sublabel: '장문 문자',
  price: '30',
  unit: '원/건',
  spec: '1,000byte 장문 메시지',
  recommendation: '상세 안내·이벤트 공지',
  accentColor: 'text-brand-primary',
  bgColor: 'bg-violet-50'
}, {
  id: 'mms',
  label: 'MMS',
  sublabel: '이미지 문자',
  price: '90',
  unit: '원/건',
  spec: '1,000byte + 이미지 첨부',
  recommendation: '이미지 포함 마케팅 발송',
  accentColor: 'text-brand-primary',
  bgColor: 'bg-rose-50'
}];
const BENEFITS: BenefitItem[] = [{
  id: 'b1',
  text: '발송 실패 건 자동 환불'
}, {
  id: 'b2',
  text: '알림톡·친구톡·문자 통합 관리'
}, {
  id: 'b3',
  text: '최대 10만 건 대량 발송'
}, {
  id: 'b4',
  text: '충전 한도 제한 없음'
}];

// @component: HappyTalkLanding
export const HappyTalkLanding = () => {
  return <div className="min-h-screen bg-default text-default overflow-x-hidden font-sans">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden" style={{
      background: ['radial-gradient(ellipse 55% 60% at 10% 20%, rgba(236,252,203,0.72) 0%, transparent 65%)', 'radial-gradient(ellipse 50% 55% at 88% 15%, rgba(186,230,255,0.65) 0%, transparent 60%)', 'radial-gradient(ellipse 45% 50% at 75% 80%, rgba(224,231,255,0.6) 0%, transparent 60%)', 'radial-gradient(ellipse 55% 45% at 20% 80%, rgba(186,230,255,0.5) 0%, transparent 60%)', 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(207,250,254,0.45) 0%, transparent 70%)', 'linear-gradient(160deg, rgba(240,253,244,0.6) 0%, rgba(240,249,255,0.8) 50%, rgba(245,243,255,0.6) 100%)'].join(', ')
    }}>
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Copy */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.55,
            ease: 'easeOut'
          }}>
              <h1 className="text-4xl lg:text-5xl font-semibold leading-[1.18] tracking-tight text-default text-balance mb-5">
                고객과 연결되는<br />
                <span style={{
                background: 'linear-gradient(90deg, #3b82f6 0%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                  가장 빠른 방법
                </span>
              </h1>
              <p className="text-subtle size-md leading-relaxed mb-5 max-w-md text-pretty">
                알림톡부터 SMS · LMS · MMS까지,<br />
                해피톡 하나로 모든 메시지 채널을 통합 관리하세요.
              </p>

              <div className="flex flex-wrap gap-y-2 gap-x-4 mb-6">
                {BENEFITS.map(b => <div key={b.id} className="flex items-center gap-1.5 size-sm text-subtle">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                    <span>{b.text}</span>
                  </div>)}
              </div>

              <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.96] text-white font-medium px-6 py-3 rounded-lg size-sm transition-colors group">
                <span>서비스 신청하기</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Right: Image */}
            <motion.div initial={{
            opacity: 0,
            y: 24
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.65,
            delay: 0.15,
            ease: 'easeOut'
          }} className="flex justify-center lg:justify-end">
              <div className="">
                <figure className="m-0 p-0">
                  <img src="https://static.happytalk.io/img/biztalk/apply/img-info-01@2x.png" alt="해피톡 알림톡·문자 메시지 발송 서비스 화면 예시" className="w-full max-w-[480px] h-auto object-contain" />
                </figure>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="pt-[72px] pb-0 bg-default">
        <div className="max-w-5xl mx-auto px-6">

          <motion.div initial={{
          opacity: 0,
          y: 14
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="flex items-center justify-between mb-10">
            <div>
              <h2 className="size-2xl font-semibold text-default text-balance mb-2 tracking-tight">
                채널별 발송 요금
              </h2>
              <p className="text-muted size-sm">
                사용한 만큼만 과금 · 발송 실패 건은 자동으로 환불됩니다
              </p>
            </div>
            <img src="https://static.happytalk.io/img/biztalk/apply/img-info-03@2x.png" alt="발송 요금 안내" className="ml-auto h-20 object-contain" />
          </motion.div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRICING_ITEMS.map((item, i) => <motion.div key={item.id} initial={{
            opacity: 0,
            y: 16
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.4,
            delay: i * 0.07
          }} className="bg-default rounded-lg p-5 flex flex-col gap-3 border border-default hover:shadow-card transition-shadow">
                <div>
                  <p className="font-semibold text-default size-lg">{item.label}</p>
                  <p className="size-xs text-muted mt-0.5">{item.sublabel}</p>
                  <p className="size-xs text-subtle mt-1.5">{item.recommendation}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-default">
                  <div className="flex items-baseline gap-1">
                    <span className={`size-2xl font-semibold font-[tabular-nums] font-['Inter'] ${item.accentColor}`}>{item.price}</span>
                    <span className="size-xs text-muted font-medium">{item.unit}</span>
                  </div>
                  <p className="size-xs text-muted mt-1 leading-relaxed">{item.spec}</p>
                </div>
              </motion.div>)}
          </div>

          <p className="mt-5 size-sm text-muted">
            월 5만 건 이상 대량 발송 시 별도 할인 · 후불 등록 가능 ·{' '}
            <span className="text-blue-500 cursor-pointer">자세한 내용은 해피톡에 문의</span>
          </p>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-[72px]" style={{
      background: 'radial-gradient(ellipse 90% 80% at 50% 100%, rgba(186,210,255,0.4) 0%, rgba(255,255,255,0) 70%)'
    }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 14
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 bg-default rounded-lg border border-default shadow-card p-8 lg:p-10">
            <div>
              <h2 className="size-xl font-semibold text-default text-balance mb-2 tracking-tight">
                지금 바로 시작해 보세요
              </h2>
              <p className="text-muted size-sm">
                기존 해피톡 계정이 있다면 별도 가입 없이 즉시 사용 가능합니다
              </p>
            </div>
            <button className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.96] text-white font-medium px-6 py-3 rounded-lg size-sm transition-colors group">
              <span>서비스 신청하기</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

    </div>;
};