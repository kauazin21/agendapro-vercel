import { ServiceUrgency } from "./entities";
export interface PriorityStrategy { calculate(): number; }
export class NormalPriorityStrategy implements PriorityStrategy { calculate(): number { return 1; } }
export class PriorityServiceStrategy implements PriorityStrategy { calculate(): number { return 2; } }
export class UrgentPriorityStrategy implements PriorityStrategy { calculate(): number { return 3; } }
export class PriorityStrategyFactory { static create(urgency: ServiceUrgency): PriorityStrategy { const strategies: Record<ServiceUrgency, PriorityStrategy> = { normal: new NormalPriorityStrategy(), priority: new PriorityServiceStrategy(), urgent: new UrgentPriorityStrategy() }; return strategies[urgency]; } }
