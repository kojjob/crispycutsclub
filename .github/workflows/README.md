# GitHub Actions Workflows

This directory contains all GitHub Actions workflows for the Crispy Cuts Club project.

## Available Workflows

### 🔄 Continuous Integration (`ci.yml`)
- **Triggers**: Push to main/develop, Pull requests
- **Jobs**:
  - **Lint**: Runs ESLint and TypeScript checks
  - **Test**: Runs unit tests with PostgreSQL
  - **Build**: Builds the Next.js application
  - **E2E**: Runs Playwright tests
  - **Security**: Runs Trivy vulnerability scanner

### 🚀 Deployment (`deploy.yml`)
- **Triggers**: Push to main, Manual dispatch
- **Jobs**:
  - **Production Deploy**: Deploys to Vercel production
  - **Preview Deploy**: Creates preview deployments for PRs
  - **Lighthouse CI**: Runs performance tests

### 📦 Dependency Review (`dependency-review.yml`)
- **Triggers**: Pull requests
- **Jobs**:
  - **Dependency Review**: Checks for vulnerable dependencies
  - **Bundle Analysis**: Analyzes bundle size changes

### 💾 Database Backup (`backup.yml`)
- **Triggers**: Daily at 2 AM UTC, Manual dispatch
- **Jobs**:
  - **Backup**: Creates PostgreSQL backup and uploads to S3
  - **Cleanup**: Removes backups older than 30 days

### 🔍 Code Quality (`code-quality.yml`)
- **Triggers**: Push to main/develop, Pull requests
- **Jobs**:
  - **SonarCloud**: Runs code quality analysis
  - **CodeQL**: Runs security analysis

### 📋 Release (`release.yml`)
- **Triggers**: Version tags (v*)
- **Jobs**:
  - **Release**: Creates GitHub release with changelog
  - **Deploy**: Triggers production deployment

## Required Secrets

Add these secrets to your GitHub repository:

### Vercel Deployment
- `VERCEL_TOKEN`: Your Vercel API token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

### Database Backup
- `PRODUCTION_DATABASE_URL`: Production database connection string
- `AWS_ACCESS_KEY_ID`: AWS access key for S3
- `AWS_SECRET_ACCESS_KEY`: AWS secret key for S3
- `AWS_REGION`: AWS region for S3 bucket
- `BACKUP_S3_BUCKET`: S3 bucket name for backups

### Code Quality
- `SONAR_TOKEN`: SonarCloud authentication token
- `CODECOV_TOKEN`: Codecov upload token

### Notifications
- `SLACK_WEBHOOK`: Slack webhook URL for notifications

## Setup Instructions

1. **Create Vercel Project**:
   ```bash
   vercel link
   ```

2. **Get Vercel Credentials**:
   ```bash
   # Get your Vercel token from: https://vercel.com/account/tokens
   
   # Get org and project IDs from .vercel/project.json after linking
   cat .vercel/project.json
   ```

3. **Configure SonarCloud**:
   - Go to https://sonarcloud.io
   - Create a new project
   - Get your token from Security tab

4. **Setup AWS S3 Bucket**:
   - Create an S3 bucket for backups
   - Create IAM user with S3 access
   - Add credentials as secrets

5. **Enable Dependabot**:
   - Go to Settings > Security & analysis
   - Enable Dependabot alerts and updates

## Local Testing

Test workflows locally using [act](https://github.com/nektos/act):

```bash
# Install act
brew install act

# Test CI workflow
act push -W .github/workflows/ci.yml

# Test with specific event
act pull_request -W .github/workflows/ci.yml
```

## Troubleshooting

### Build Failures
- Check if Prisma client is generated: Add `prisma generate` to build script
- Verify all environment variables are set in GitHub Secrets

### Test Failures
- Ensure PostgreSQL service is running in CI
- Check if migrations are applied before tests

### Deployment Issues
- Verify Vercel token has correct permissions
- Check if project is linked to Vercel

## Best Practices

1. **Keep workflows DRY**: Use composite actions for repeated steps
2. **Use caching**: Cache dependencies to speed up workflows
3. **Fail fast**: Configure matrix builds to fail fast
4. **Use environments**: Set up GitHub environments for deployments
5. **Monitor costs**: Be mindful of GitHub Actions minutes usage