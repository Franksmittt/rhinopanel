// Phase 3: Type-safe JSON-LD Component for Total Semantic Control
// Uses schema-dts for type safety and prevents schema validation errors

import { WithContext, Thing } from 'schema-dts';

interface JsonLdProps<T extends Thing> {
  data: WithContext<T>;
}

/**
 * Type-safe JSON-LD component for injecting structured data
 * This ensures schema.org compliance and prevents common errors
 */
export default function JsonLd<T extends Thing>({ data }: JsonLdProps<T>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0).replace(/</g, '\\u003c'),
      }}
    />
  );
}

