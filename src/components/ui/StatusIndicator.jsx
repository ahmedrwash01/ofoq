/**
 * OFOQ LIVE TELEMETRY STATUS INDICATOR
 * Pulsing live node indicator for production health & capabilities
 */

export function StatusIndicator({
  status = 'live',
  label = 'SYSTEM OPERATIONAL',
  className = '',
  ...props
}) {
  return (
    <div 
      className={`ofoq-status ${className}`.trim()} 
      role="status" 
      aria-label={`System status: ${label}`}
      {...props}
    >
      <span className={`ofoq-status-dot ofoq-status-dot--${status}`} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
