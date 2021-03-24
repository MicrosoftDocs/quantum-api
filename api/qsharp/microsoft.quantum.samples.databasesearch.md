---
uid: Microsoft.Quantum.Samples.DatabaseSearch
title: Microsoft.Quantum.Samples.DatabaseSearch namespace
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Samples.DatabaseSearch
qsharp.summary: ''
---

# Microsoft.Quantum.Samples.DatabaseSearch namespace




<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[ApplyDatabaseOracle](xref:Microsoft.Quantum.Samples.DatabaseSearch.ApplyDatabaseOracle) |Given a qubit to use to store a mark bit and a register corresponding to a database, marks the first qubit conditioned on the register state being the all-ones state |11…1〉.
|[ApplyDatabaseOracleFromInts](xref:Microsoft.Quantum.Samples.DatabaseSearch.ApplyDatabaseOracleFromInts) |Database oracle `D` constructed from classical database.
|[ApplyGroverSearch](xref:Microsoft.Quantum.Samples.DatabaseSearch.ApplyGroverSearch) |Performs quantum search for the marked elements and returns an index to the found element in integer format.
|[ApplyQuantumSearch](xref:Microsoft.Quantum.Samples.DatabaseSearch.ApplyQuantumSearch) |Performs quantum search for the marked element and returns an index to the found element in binary format. Finds the marked element with probability sin²((2*nIterations+1) sin⁻¹(1/√N)).
|[ApplyStatePreparationOracle](xref:Microsoft.Quantum.Samples.DatabaseSearch.ApplyStatePreparationOracle) |Given a register of qubits initially in the state |00…0〉, prepares the start state |1〉|N-1〉/√N + |0〉(|0〉+|1〉+...+|N-2〉)/√N.
|[ApplyUniformSuperpositionOracle](xref:Microsoft.Quantum.Samples.DatabaseSearch.ApplyUniformSuperpositionOracle) |Given a register of qubits initially in the state |00…0〉, prepares a uniform superposition over all computational basis states.
|[GroverHardCodedTest](xref:Microsoft.Quantum.Samples.DatabaseSearch.GroverHardCodedTest) |Performs quantum search for the marked element and checks whether the success probability matches theoretical predictions. Then checks whether the correct index is found, post-selected on success.
|[ReflectAboutInitialState](xref:Microsoft.Quantum.Samples.DatabaseSearch.ReflectAboutInitialState) |Performs a reflection around the initial state, given by DU|0〉|0〉.
|[ReflectAboutMarkedState](xref:Microsoft.Quantum.Samples.DatabaseSearch.ReflectAboutMarkedState) |Performs a reflection about the marked state.
|[ReflectAboutZero](xref:Microsoft.Quantum.Samples.DatabaseSearch.ReflectAboutZero) |Performs a reflection about the |00…0〉 state.
|[SearchForMarkedState](xref:Microsoft.Quantum.Samples.DatabaseSearch.SearchForMarkedState) |Prepares the start state and boosts the amplitude of the marked subspace by a sequence of reflections about the marked state and the start state.
|[StatePreparationOracleTest](xref:Microsoft.Quantum.Samples.DatabaseSearch.StatePreparationOracleTest) |Checks whether state preparation marks the right fraction of elements against theoretical predictions.
|[_GroverStatePrepOracle](xref:Microsoft.Quantum.Samples.DatabaseSearch._GroverStatePrepOracle) |Preparation of start state from database oracle and oracle `U` that creates a uniform superposition over database indices.

## Functions

| Name | Summary |
|------|---------|
|[GroverSearch](xref:Microsoft.Quantum.Samples.DatabaseSearch.GroverSearch) |Grover's search algorithm using library functions.
|[GroverStatePrepOracle](xref:Microsoft.Quantum.Samples.DatabaseSearch.GroverStatePrepOracle) |`StateOracle` type for the preparation of a start state that has a marked qubit entangled with some desired state in the database register.

<!-- /summaries -->
