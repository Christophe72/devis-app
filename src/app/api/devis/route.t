import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { client, email, lignes, totalHT, tva, totalTTC } = body

    const devis = await prisma.devis.create({
      data: {
        client,
        email,
        totalHT,
        tva,
        totalTTC,
        lignes: {
          create: lignes.map((l: any) => ({
            description: l.description,
            quantite: l.quantite,
            prixHT: l.prixHT,
          })),
        },
      },
      include: { lignes: true },
    })

    return NextResponse.json(devis, { status: 201 })
  } catch (error) {
    console.error('Erreur de base de données:', error)
    return NextResponse.json({ error: 'Erreur de connexion à la base de données' }, { status: 500 })
  }
}
