# Guia de Deploy - GitHub Pages

## ✅ Configurações Aplicadas

O projeto já está configurado para deploy automático no GitHub Pages:

- ✅ Base path configurado: `/EgosAbyssPD/`
- ✅ HashRouter implementado (URLs com `#`)
- ✅ Workflow do GitHub Actions criado
- ✅ Arquivo `.nojekyll` adicionado

## 🚀 Como Ativar o GitHub Pages

### 1. Fazer Push do Código

```bash
git add .
git commit -m "Configuração para GitHub Pages"
git push origin main
```

### 2. Ativar GitHub Pages no Repositório

1. Vá para o repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Build and deployment**:
   - **Source**: Selecione "GitHub Actions"
5. Aguarde alguns minutos para o primeiro deploy

### 3. Acessar o Site

Após o deploy, seu site estará disponível em:
```
https://USERNAME.github.io/EgosAbyssPD/
```

(Substitua `USERNAME` pelo seu nome de usuário do GitHub)

## 📝 Como Funciona

- **Deploy Automático**: Toda vez que você fizer push para a branch `main`, o GitHub Actions automaticamente:
  1. Instala as dependências (`npm ci`)
  2. Builda o projeto (`npm run build`)
  3. Faz deploy da pasta `dist` para o GitHub Pages

- **HashRouter**: As URLs usam `#` para navegação:
  - Página inicial: `https://USERNAME.github.io/EgosAbyssPD/`
  - Contato: `https://USERNAME.github.io/EgosAbyssPD/#/contato`

## 🔧 Comandos Úteis

```bash
# Build local para testar
npm run build

# Visualizar build local
npm run preview
```

## 📦 Estrutura de Deploy

```
.github/
  workflows/
    deploy.yml          # Workflow de deploy automático
public/
  .nojekyll            # Previne processamento Jekyll
vite.config.ts         # Base path: /EgosAbyssPD/
src/
  App.tsx              # HashRouter configurado
```

## ⚠️ Importante

- O arquivo `package.json` tem placeholder `USERNAME` no campo `homepage` - atualize com seu username real do GitHub
- A branch padrão no workflow é `main` - se sua branch principal for `master`, altere no arquivo `.github/workflows/deploy.yml`

## 🔍 Monitorar Deploy

Para ver o progresso do deploy:
1. Vá até a aba **Actions** no GitHub
2. Clique no workflow mais recente
3. Aguarde o processo de build e deploy completar (geralmente 2-3 minutos)

## ✅ Checklist Final

- [ ] Código commitado e pushed para o GitHub
- [ ] GitHub Pages ativado nas configurações (Source: GitHub Actions)
- [ ] Username atualizado no `package.json`
- [ ] Primeiro deploy concluído (verifique em Actions)
- [ ] Site acessível na URL do GitHub Pages
