#!/usr/bin/env bash
cd src/main/webapp/ && browser-sync start --proxy "localhost:5000" --files "*"