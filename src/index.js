import {parse} from 'mongo-parse';

export default function (query) {
  const parsed = parse(query);
  const masked = parsed.mapValues(maskField);
  return masked;
}

function maskField(key, val) {
  if (typeof val === 'string') {
    return '###';
  } else if (typeof val === 'number') {
    return 12345;
  }
}
