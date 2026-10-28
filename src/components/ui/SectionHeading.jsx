/**
 * OFOQ SECTION HEADING
 * Structured heading block with technical eyebrow, title, and lead description
 */

import { TechnicalLabel } from './TechnicalLabel.jsx';

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  badgeVariant = 'emerald',
  className = '',
  ...props
}) {
  const alignClass = align === 'center' ? 'ofoq-heading--center' : '';

  return (
    <div className={`ofoq-heading ${alignClass} ${className}`.trim()} {...props}>
      {eyebrow && (
        <TechnicalLabel variant={badgeVariant}>
          {eyebrow}
        </TechnicalLabel>
      )}
      {title && <h2 className="ofoq-heading-title">{title}</h2>}
      {lead && <p className="ofoq-heading-lead">{lead}</p>}
    </div>
  );
}
