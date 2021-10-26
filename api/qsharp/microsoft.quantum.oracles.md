---
uid: Microsoft.Quantum.Oracles
title: Microsoft.Quantum.Oracles namespace
ms.date: 10/22/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Oracles
qsharp.summary: >-
  This namespace provides user-defined types to decorate various kinds of
  oracles by their intended use in quantum algorithms such as phase estimation
  and amplitude amplification.
---

# Microsoft.Quantum.Oracles namespace

This namespace provides user-defined types to decorate various kinds of
oracles by their intended use in quantum algorithms such as phase estimation
and amplitude amplification.


<!-- summaries -->


## Functions

| Name | Summary |
|------|---------|
|[DeterministicStateOracleFromStateOracle](xref:Microsoft.Quantum.Oracles.DeterministicStateOracleFromStateOracle) |Converts an oracle of type `StateOracle` to `DeterministicStateOracle`. |
|[ObliviousOracleFromDeterministicStateOracle](xref:Microsoft.Quantum.Oracles.ObliviousOracleFromDeterministicStateOracle) |Combines the oracles `DeterministicStateOracle` and `ObliviousOracle`. |
|[OracleToDiscrete](xref:Microsoft.Quantum.Oracles.OracleToDiscrete) |Given an operation representing a "black-box" oracle, returns a discrete-time oracle which represents the "black-box" oracle repeated multiple times. |
|[ReflectionOracleFromDeterministicStateOracle](xref:Microsoft.Quantum.Oracles.ReflectionOracleFromDeterministicStateOracle) |Constructs reflection about a given state from an oracle. |
|[StateOracleFromDeterministicStateOracle](xref:Microsoft.Quantum.Oracles.StateOracleFromDeterministicStateOracle) |Converts an oracle of type `DeterministicStateOracle` to `StateOracle`. |

## User-defined types

| Name | Summary |
|------|---------|
|[ContinuousOracle](xref:Microsoft.Quantum.Oracles.ContinuousOracle) |Represents a continuous-time oracle. |
|[DeterministicStateOracle](xref:Microsoft.Quantum.Oracles.DeterministicStateOracle) |Represents an oracle for deterministic state preparation. |
|[DiscreteOracle](xref:Microsoft.Quantum.Oracles.DiscreteOracle) |Represents a discrete-time oracle. |
|[ObliviousOracle](xref:Microsoft.Quantum.Oracles.ObliviousOracle) |Represents an oracle for oblivious amplitude amplification. |
|[ReflectionOracle](xref:Microsoft.Quantum.Oracles.ReflectionOracle) |Represents a reflection oracle. |
|[StateOracle](xref:Microsoft.Quantum.Oracles.StateOracle) |Represents an oracle for state preparation. |
<!-- /summaries -->
