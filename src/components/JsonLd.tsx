import { Car } from '@/types/car';
import { DEALERSHIP } from '@/data/dealership';

interface JsonLdProps {
  type: 'AutoDealer' | 'Vehicle';
  car?: Car;
  baseUrl?: string;
}

export default function JsonLd({ type, car, baseUrl = 'https://priyankaracarsale.lk' }: JsonLdProps) {
  if (type === 'AutoDealer') {
    const autoDealerSchema = {
      '@context': 'https://schema.org',
      '@type': 'AutoDealer',
      'name': DEALERSHIP.name,
      'alternateName': DEALERSHIP.altName,
      'legalName': DEALERSHIP.legalName,
      'description': DEALERSHIP.tagline,
      'url': baseUrl,
      'telephone': [DEALERSHIP.phoneHotline, DEALERSHIP.phoneLandline],
      'email': DEALERSHIP.email,
      'logo': `${baseUrl}/logo.svg`,
      'image': `${baseUrl}${DEALERSHIP.ogImageUrl}`,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': DEALERSHIP.address.street,
        'addressLocality': DEALERSHIP.address.city,
        'postalCode': DEALERSHIP.address.postalCode,
        'addressRegion': DEALERSHIP.address.district,
        'addressCountry': DEALERSHIP.address.country,
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': DEALERSHIP.geo.latitude,
        'longitude': DEALERSHIP.geo.longitude,
      },
      'openingHours': DEALERSHIP.openingHours,
      'priceRange': '$$$',
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(autoDealerSchema) }}
      />
    );
  }

  if (type === 'Vehicle' && car) {
    const vehicleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Vehicle',
      'name': `${car.make} ${car.model} ${car.year}`,
      'description': car.description,
      'brand': {
        '@type': 'Brand',
        'name': car.make,
      },
      'model': car.model,
      'productionDate': String(car.year),
      'vehicleTransmission': car.transmission,
      'fuelType': car.fuelType,
      'vehicleEngine': {
        '@type': 'EngineSpecification',
        'engineDisplacement': {
          '@type': 'QuantitativeValue',
          'value': car.engineCc,
          'unitCode': 'CMQ',
        },
      },
      'mileageFromOdometer': {
        '@type': 'QuantitativeValue',
        'value': car.mileage,
        'unitCode': 'KMT',
      },
      'itemCondition':
        car.condition === 'Brand New'
          ? 'https://schema.org/NewCondition'
          : 'https://schema.org/UsedCondition',
      'offers': {
        '@type': 'Offer',
        'priceCurrency': 'LKR',
        'price': car.priceLkr || 'Contact for Price',
        'availability': 'https://schema.org/InStock',
        'seller': {
          '@type': 'AutoDealer',
          'name': DEALERSHIP.name,
          'telephone': DEALERSHIP.phoneHotline,
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': DEALERSHIP.address.street,
            'addressLocality': DEALERSHIP.address.city,
            'postalCode': DEALERSHIP.address.postalCode,
          },
        },
      },
      'image': car.images.map((img) => `${baseUrl}${img}`),
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
      />
    );
  }

  return null;
}
