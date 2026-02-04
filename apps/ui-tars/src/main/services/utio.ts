/**
 * Copyright (c) 2025 Bytedance, Inc. and its affiliates.
 * SPDX-License-Identifier: Apache-2.0
 */

// Telemetry service removed for privacy.
// This stub exists to prevent import errors from any remaining references.

export class UTIOService {
  private static instance: UTIOService;

  static getInstance(): UTIOService {
    if (!UTIOService.instance) {
      UTIOService.instance = new UTIOService();
    }
    return UTIOService.instance;
  }

  async appLaunched() {}
  async sendInstruction(_instruction: string) {}
  async shareReport(_params: {
    instruction: string;
    lastScreenshot?: string;
    report?: string;
  }) {}
}
