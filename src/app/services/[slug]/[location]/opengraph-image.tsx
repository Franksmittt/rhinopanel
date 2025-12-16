// Phase 16: Dynamic OG Image Generation - "Retina Bombardment" Strategy
// Generates high-fidelity, programmatic Open Graph images for location-service pages
// Uses @vercel/og (Satori + Resvg) for edge-rendered social cards

import { ImageResponse } from 'next/og';
import { serviceData } from '@/lib/service-data';
import { getLocationBySlug } from '@/lib/location-data';

// Edge runtime for optimal performance
export const runtime = 'edge';
export const alt = 'Rhino Panelbeaters Service';

// Phase 16: Generate dynamic OG image based on service and location params
export default async function Image({
  params,
}: {
  params: { slug: string; location: string };
}) {
  try {
    const service = serviceData[params.slug];
    const location = getLocationBySlug(params.location);

    // Fallback if service or location not found
    if (!service || !location) {
      return new Response('Service or location not found', { status: 404 });
    }

    // Phase 16: Construct dynamic content
    const serviceTitle = service.title;
    const locationName = location.name;
    const routeRef = location.localContext?.routeReference || '';

    // Phase 16: Brand colors (Rhino Panelbeaters)
    const primaryBlue = '#3B82F6'; // Brand blue
    const primaryBlueDark = '#2563EB';
    const brandOrange = '#F97316'; // Accent orange
    const darkBg = '#0f172a'; // Dark slate for contrast
    const lightText = '#ffffff';
    const mutedText = '#cbd5e1';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: darkBg,
            // Phase 16: Subtle background pattern for visual depth
            backgroundImage:
              'radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            position: 'relative',
          }}
        >
          {/* Phase 16: Brand Badge - "Official Repair Center" */}
          <div
            style={{
              position: 'absolute',
              top: 40,
              left: 40,
              display: 'flex',
              alignItems: 'center',
              padding: '12px 24px',
              backgroundColor: primaryBlue,
              borderRadius: '9999px',
              border: `2px solid ${primaryBlueDark}`,
            }}
          >
            <span
              style={{
                fontSize: 24,
                color: lightText,
                fontWeight: 700,
                letterSpacing: '0.05em',
              }}
            >
              OFFICIAL REPAIR CENTER
            </span>
          </div>

          {/* Phase 16: Location Badge */}
          <div
            style={{
              position: 'absolute',
              top: 40,
              right: 40,
              display: 'flex',
              alignItems: 'center',
              padding: '12px 24px',
              backgroundColor: 'rgba(31, 41, 55, 0.8)',
              borderRadius: '9999px',
              border: `2px solid ${mutedText}`,
            }}
          >
            <span
              style={{
                fontSize: 24,
                color: mutedText,
                fontWeight: 600,
              }}
            >
              📍 {locationName}
            </span>
          </div>

          {/* Phase 16: Main Content Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '90%',
              paddingTop: 120,
            }}
          >
            {/* Phase 16: Service Title with Gradient (Large Typography) */}
            <h1
              style={{
                fontSize: 96,
                fontWeight: 900,
                background: `linear-gradient(to right, ${primaryBlue}, ${brandOrange})`,
                backgroundClip: 'text',
                color: 'transparent',
                lineHeight: 1.1,
                margin: 0,
                marginBottom: 24,
                paddingBottom: 24, // Fix for clipping text descenders
              }}
            >
              {serviceTitle}
            </h1>

            {/* Phase 16: Location Subtitle */}
            <p
              style={{
                fontSize: 48,
                color: mutedText,
                marginTop: 0,
                marginBottom: 32,
                fontWeight: 600,
              }}
            >
              in {locationName}
            </p>

            {/* Phase 16: Route Reference (if available) */}
            {routeRef && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '16px 32px',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '12px',
                  border: `2px solid ${primaryBlue}`,
                  marginTop: 16,
                }}
              >
                <span
                  style={{
                    fontSize: 32,
                    color: primaryBlue,
                    fontWeight: 600,
                  }}
                >
                  🛣️ Serving the {routeRef}
                </span>
              </div>
            )}

            {/* Phase 16: Trust Signals */}
            <div
              style={{
                display: 'flex',
                gap: 32,
                marginTop: 48,
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: 48,
                    color: brandOrange,
                    fontWeight: 900,
                  }}
                >
                  ⭐ 4.9/5
                </span>
                <span
                  style={{
                    fontSize: 24,
                    color: mutedText,
                  }}
                >
                  Rated
                </span>
              </div>
              <div
                style={{
                  width: '2px',
                  height: '60px',
                  backgroundColor: mutedText,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: 48,
                    color: brandOrange,
                    fontWeight: 900,
                  }}
                >
                  ✓ 3-Year
                </span>
                <span
                  style={{
                    fontSize: 24,
                    color: mutedText,
                  }}
                >
                  Warranty
                </span>
              </div>
            </div>
          </div>

          {/* Phase 16: Brand Watermark (Bottom) */}
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: 32,
                color: mutedText,
                fontWeight: 700,
                opacity: 0.5,
              }}
            >
              RHINO PANELBEATERS & TOWING
            </span>
          </div>
        </div>
      ),
      {
        // Phase 16: Standard OG image dimensions (1200x630)
        width: 1200,
        height: 630,
        // Phase 16: Aggressive caching for performance
        headers: {
          'Cache-Control':
            'public, immutable, no-transform, s-maxage=31536000, max-age=31536000',
        },
      }
    );
  } catch (e) {
    console.error('OG Image Generation Error:', e);
    const errorMessage = e instanceof Error ? e.message : 'Unknown error';
    return new Response(`Failed to generate image: ${errorMessage}`, {
      status: 500,
    });
  }
}

