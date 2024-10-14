import os
from openai import OpenAI
from dotenv import load_dotenv

# Chargez les variables d'environnement à partir du fichier .env
load_dotenv()

# Initialisez le client OpenAI avec votre clé API
client = OpenAI(
    api_key=os.environ.get("ec69b25d1f084ffc9482eddab1dce222"),
)

# Effectuer une requête simple
chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "Say this is a test",
        }
    ],
    model="gpt-4o-mini",  # Remplacez par le nom de votre modèle déployé
)

# Affichez la réponse
print(chat_completion.choices[0].message['content'])
