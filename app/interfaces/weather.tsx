export interface Weather {
    datetime: string; // Date in a format like "YYYY-MM-DD"
    conditions: string; // General weather conditions (e.g., "Cloudy", "Sunny")
    description: string; // More detailed description of the weather
    tempmin: number; // Minimum temperature for the day
    tempmax: number; // Maximum temperature for the day
}
