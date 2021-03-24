---
uid: Microsoft.Quantum.Oracles
title: Microsoft.Quantum.Oracles namespace
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Oracles
qsharp.summary: >-
  This namespaces provides user-defined types to decorate various kinds of
  oracles by their intended use in quantum algorithms such as phase estimation
  and amplitude amplification.
---

# Microsoft.Quantum.Oracles namespace

This namespaces provides user-defined types to decorate various kinds of
oracles by their intended use in quantum algorithms such as phase estimation
and amplitude amplification.


<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[_ReflectionOracleFromDeterministicStateOracle](xref:Microsoft.Quantum.Oracles._ReflectionOracleFromDeterministicStateOracle) |Implementation of <xref:microsoft.quantum.canon.reflectionoraclefromdeterministicstateoracle>.

## Functions

| Name | Summary |
|------|---------|
|[DeterministicStateOracleFromStateOracle](xref:Microsoft.Quantum.Oracles.DeterministicStateOracleFromStateOracle) |Converts an oracle of type `StateOracle` to `DeterministicStateOracle`.
|[ObliviousOracleFromDeterministicStateOracle](xref:Microsoft.Quantum.Oracles.ObliviousOracleFromDeterministicStateOracle) |Combines the oracles `DeterministicStateOracle` and `ObliviousOracle`.
|[OracleToDiscrete](xref:Microsoft.Quantum.Oracles.OracleToDiscrete) |Given an operation representing a "black-box" oracle, returns a discrete-time oracle which represents the "black-box" oracle repeated multiple times.
|[ReflectionOracleFromDeterministicStateOracle](xref:Microsoft.Quantum.Oracles.ReflectionOracleFromDeterministicStateOracle) |Constructs reflection about a given state from an oracle.
|[StateOracleFromDeterministicStateOracle](xref:Microsoft.Quantum.Oracles.StateOracleFromDeterministicStateOracle) |Converts an oracle of type `DeterministicStateOracle` to `StateOracle`.

## User-defined types

| Name | Summary |
|------|---------|
|[ContinuousOracle](xref:Microsoft.Quantum.Oracles.ContinuousOracle) |Represents a continuous-time oracle.
This is an oracle that implements $U(\delta t) : \ket{\psi(t)} \mapsto \ket{\psi(t + \delta t)}$ for all times $t$, where $U$ is a fixed operation, and where $\delta t$ is a non-negative real number.
|[DeterministicStateOracle](xref:Microsoft.Quantum.Oracles.DeterministicStateOracle) |Represents an oracle for deterministic state preparation.
The input to the oracle $O$ is:
- The register that will store the desired quantum state $\ket{\psi}\_s$.
|[DiscreteOracle](xref:Microsoft.Quantum.Oracles.DiscreteOracle) |Represents a discrete-time oracle.
This is an oracle that implements $U^m$ for a fixed operation $U$ and a non-negative integer $m$.
|[ObliviousOracle](xref:Microsoft.Quantum.Oracles.ObliviousOracle) |Represents an oracle for oblivious amplitude amplification.
The inputs to the oracle $O$ are:
- The ancilla register $a$ that $O$ acts on. - The system register $s$ on which the desired unitary $U$ is applied, post-selected on register $a$ being in state $\ket{t}\_a$.
|[ReflectionOracle](xref:Microsoft.Quantum.Oracles.ReflectionOracle) |Represents a reflection oracle.
A reflection oracle, $O$, has inputs:
- The phase $\phi$ by which to rotate the reflected subspace. - The qubit register on which to perform the given reflection.
|[StateOracle](xref:Microsoft.Quantum.Oracles.StateOracle) |Represents an oracle for state preparation.
The inputs to the oracle $O$ are:
- An integer indexing the flag qubit $f$. - The system register $s$ that will store the desired quantum state $\ket{\psi}\_s$.
<!-- /summaries -->
