import { transports, format } from "winston";

/*
Defines the options for logger configuration.
These options include settings for log transports, such as file logging.
The logger is configured to write logs to 'target/logs/demoblaze.log' with debug level and specific formatting.
*/
export function options() {
    return {
        transports: [
            new transports.File({
                filename: 'test-results/logs/demoblaze.log',
                level: 'debug',
                format: format.combine(
                    format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
                    format.align(),
                    format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
                )
            }),
        ]
    }
};