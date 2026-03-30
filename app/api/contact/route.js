let messages = []

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, message } = body
    
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Tous les champs sont requis' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    // Stockage en memoire (pour consultation)
    messages.push({
      id: messages.length + 1,
      name,
      email,
      message,
      date: new Date().toISOString()
    })
    
    console.log(`[Contact] Nouveau message de ${name} (${email})`)
    
    return new Response(
      JSON.stringify({ success: true, message: 'Message envoye avec succes' }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Erreur serveur' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}

// Endpoint pour voir les messages (admin)
export async function GET() {
  return new Response(
    JSON.stringify({ messages, count: messages.length }),
    { headers: { 'Content-Type': 'application/json' } }
  )
}
