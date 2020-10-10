
export interface Instant {
    LocalTime: String,
    ISOTime: String,
    Unix: number,
}

export enum Granularity {
    MINUTES = 60 * 1000,
    HOURS = MINUTES * 60,
}
