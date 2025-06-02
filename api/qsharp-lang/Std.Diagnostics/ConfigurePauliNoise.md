---
uid: Qdk.Std.Diagnostics.ConfigurePauliNoise
title: ConfigurePauliNoise function
description: "Q# ConfigurePauliNoise function: Configures Pauli noise for simulation."
ms.date: 06/02/2025
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Diagnostics
qsharp.name: ConfigurePauliNoise
qsharp.summary: "Configures Pauli noise for simulation."
---

# ConfigurePauliNoise function

Fully qualified name: Std.Diagnostics.ConfigurePauliNoise

```qsharp
function ConfigurePauliNoise(px : Double, py : Double, pz : Double) : Unit
```

## Summary
Configures Pauli noise for simulation.

## Description
This function configures Pauli noise for simulation. Parameters represent
probabilities of applying X, Y, and Z gates and must add up to at most 1.0.
Noise is applied after each gate and before each measurement in the simulator
backend. Decompositions may affect the number of times noise is applied.
Use 0.0 for all parameters to simulate without noise.

## Input
### px
Probability of applying X gate.
### py
Probability of applying Y gate.
### pz
Probability of applying Z gate.
