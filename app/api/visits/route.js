let visitCount = 0

export async function POST() {
  visitCount++
  return new Response(JSON.stringify({ count: visitCount }), {
    headers: { 'Content-Type': 'application/json' },
  })
}

export async function GET() {
  return new Response(JSON.stringify({ count: visitCount }), {
    headers: { 'Content-Type': 'application/json' },
  })
}