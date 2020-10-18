
export enum UIGranularity {
    MINUTES_5 = "5m",
    HOURS_1 = "1h",
    HOURS_24 = "24h",
}

export function toLabel(e: UIGranularity): string {
    const unit = e[e.length - 1]
    const value = e.slice(0, e.length - 1)
    const label = unit === "m" ? "Minutes" : "Hours"
    return `${value} ${label}`
}
