import { Model } from '../types';

export const models: Model[] = [
  {
    id: '1',
    name: 'SynthesisGPT 7B',
    description: 'A versatile language model optimized for code generation and technical writing tasks.',
    tags: ['text-generation', 'coding'],
    price: 0,
    isFree: true,
    parameters: 7000000000,
    rating: 4.7,
    imageUrl: 'https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true
  },
  {
    id: '2',
    name: 'ImageCraft Pro',
    description: 'State-of-the-art image generation model capable of creating photorealistic images from text prompts.',
    tags: ['image-generation'],
    price: 29.99,
    isFree: false,
    parameters: 3000000000,
    rating: 4.9,
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true
  },
  {
    id: '3',
    name: 'VectorEmbed XL',
    description: 'Advanced embedding model for document retrieval and semantic search applications.',
    tags: ['embedding'],
    price: 19.99,
    isFree: false,
    parameters: 1500000000,
    rating: 4.5,
    imageUrl: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false
  },
  {
    id: '4',
    name: 'BioMed-LLM',
    description: 'Specialized language model for biomedical research and healthcare applications.',
    tags: ['text-generation', 'classification'],
    price: 49.99,
    isFree: false,
    parameters: 13000000000,
    rating: 4.8,
    imageUrl: 'https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false
  },
  {
    id: '5',
    name: 'LegalBERT Pro',
    description: 'Fine-tuned for legal document analysis, contract review, and legal research.',
    tags: ['text-generation', 'classification'],
    price: 39.99,
    isFree: false,
    parameters: 6000000000,
    rating: 4.6,
    imageUrl: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false
  },
  {
    id: '6',
    name: 'Whisper Enhanced',
    description: 'Advanced speech recognition model supporting 100+ languages with high accuracy.',
    tags: ['classification'],
    price: 0,
    isFree: true,
    parameters: 2000000000,
    rating: 4.7,
    imageUrl: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true
  }
];