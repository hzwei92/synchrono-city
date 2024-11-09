# Bitcoin/Lightning Node Setup

This repository contains Docker Compose configuration for running:
- Bitcoin Core (pruned)
- Lightning Network Daemon (LND)
- Monitoring stack (Prometheus + Grafana)
- Synchrono application

## Prerequisites

- Docker and Docker Compose
- At least 20GB free disk space
- 4GB+ RAM recommended

## Setup Instructions

1. Clone this repository:
```bash
git clone <repository-url> && cd synchrono
docker run --rm --entrypoint /bin/sh ruimarinho/bitcoin-core:23.0 -c 'bitcoin-cli createauth bitcoin'
# Create .env file with provided settings
mkdir -p prometheus
docker-compose up -d
docker-compose exec lnd lncli create  # Save your seed phrase!
```

3. **Access**
- Web Interface: http://localhost:3000
- Grafana: http://localhost:3001 (admin/your_password)
- Prometheus: http://localhost:9090

## Common Commands

```bash
# Check status
docker-compose exec bitcoind bitcoin-cli getblockchaininfo
docker-compose exec lnd lncli getinfo

# View logs
docker-compose logs -f [service]

# Stop services
docker-compose down
```

## Important Notes

1. Initial blockchain sync takes several days
2. Backup your LND seed phrase
3. Never commit `.env` to version control
4. For testing, use Bitcoin testnet
5. Keep sufficient balance for membership

## Security

1. Change default passwords
2. Use firewall
3. Update regularly
4. Monitor resources
5. Backup data

[Add your license information here]